import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const InputControl: React.FC<{
  selectedValue: string;
  change: (value: 'mkg' | 'ftlbs') => void;
}> = (props) => {
  const modeChangeHandler = (event: CustomEvent) => {
    props.change(event.detail.value);
  };

  return (
    <IonSegment value={props.selectedValue} onIonChange={modeChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
