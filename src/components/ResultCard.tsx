import React from 'react';
import {
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from '@ionic/react';

const ResultCard: React.FC<{ val: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard className="ion-text-center">
          <IonCardHeader>Body mass index is</IonCardHeader>
          <IonCardContent>
            <h2
              color={
                props.val >= 18.5 && props.val <= 24.9 ? 'primary' : 'danger'
              }
            >
              {props.val.toFixed(2)}
            </h2>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default ResultCard;
