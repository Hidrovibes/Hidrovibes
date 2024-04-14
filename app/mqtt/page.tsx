"use client"
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Home() {
  const [distanceData, setDistanceData] = useState([]);

  useEffect(() => {
    // Conexión al broker MQTT
    const client = mqtt.connect('wss://broker.emqx.io:8083/mqtt');

    // Manejador de eventos cuando se conecta al broker
    client.on('connect', function () {
      console.log('Connected to MQTT broker');
      // Suscripción al tema de interés
      client.subscribe('casa/distancia', function (err) {
        if (!err) {
          console.log('Subscribed to casa/distancia');
        } else {
          console.error('Subscription error:', err);
        }
      });
    });

  /*  // Manejador de eventos cuando llega un mensaje
    client.on('message', function (topic, message) {
      // Verificar si el mensaje es del tema deseado
      if (topic === 'sensores/humedad') {
        // Actualizar el estado con los nuevos datos recibidos
       setDistanceData(prevData => [...prevData, parseFloat(message.toString())]);
    });*/

    // Limpiar la conexión cuando el componente se desmonta
    return () => {
      client.end();
      console.log('Disconnected from MQTT broker');
    };
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez

  return (
    <div>
       <h1 className='font-serif text-2xl text-center font-medium text-blue-500 '>Distance Data</h1>
      <br/>
      <br/>
      <LineChart width={800} height={400} data={distanceData.map((value, index) => ({ name: index + 1, distance: value }))}>
  <XAxis dataKey="name" />
  <YAxis domain={['auto', 'auto']} /> {/* Aquí invertimos el eje Y */}
  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
  <Line type="monotone" dataKey="distance" stroke="#8884d8" />
  <Tooltip />
  <Legend />
</LineChart>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    
  );
}