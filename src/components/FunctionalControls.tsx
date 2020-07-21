import React from 'react';

import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const FunctionalControls: React.FC<{
  calculate: () => void;
  refresh: () => void;
}> = (props) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.calculate}>
          <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.refresh}>
          <IonIcon slot="start" icon={refreshOutline}></IonIcon>
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default FunctionalControls;
