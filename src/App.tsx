import React from 'react';
import { useRef, useState } from 'react';
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import FunctionalControls from './components/FunctionalControls';
import ResultCard from './components/ResultCard';
import InputControl from './components/InputControl';

const App: React.FC = () => {
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const [result, setResult] = useState<number>(0);

  const [error, setError] = useState<string>('');

  const [mode, setMode] = useState<'mkg' | 'ftlbs'>('mkg');

  const calculateBmi = () => {
    const weightValue = weightInputRef.current!.value;
    const heightValue = heightInputRef.current!.value;

    if (
      !weightValue ||
      !heightValue ||
      +heightValue <= 0 ||
      +weightValue <= 0
    ) {
      setError('Please enter valid non negative numbers');
      return;
    }

    const weightConversionFactor = mode === 'ftlbs' ? 2.2 : 1;

    const weight = +weightValue / weightConversionFactor;

    const heightConversionFactor = mode === 'ftlbs' ? 3.28 : 1;

    const height = +heightValue / heightConversionFactor;

    const bmiValue = +weight / (+height * +height);

    setResult(bmiValue);
  };

  const changeModeHandler = (newMode: 'mkg' | 'ftlbs') => {
    setMode(newMode);
  };

  const resetError = () => {
    setError('');
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setResult(0);
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {
            text: 'Understood',
            handler: () => {
              resetError();
            },
          },
        ]}
      ></IonAlert>
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Body Mass Index</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={mode} change={changeModeHandler} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Enter height in {mode === 'mkg' ? 'meter' : 'foot'}
                  </IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Enter weight in {mode === 'mkg' ? 'kg' : 'lbs'}
                  </IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <FunctionalControls
              calculate={calculateBmi}
              refresh={resetInputs}
            />
            {result !== 0 && <ResultCard val={result} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
