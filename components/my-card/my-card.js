import React from 'react';
import { Card, Text } from 'react-native-elements';

export default function MyCard(props){

    return (
      <Card>
        <Card.Title>{props.title}</Card.Title>
        {(props.image!==undefined) && (
          <Card.Image
            source={props.image}
          />
        )}
        <Text style={{ marginTop: 10 }}>{props.description}</Text>
      </Card>
    );
}