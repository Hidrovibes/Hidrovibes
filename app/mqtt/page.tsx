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
    <header className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-black">Hidrovibes</div>
      </div>
    </header>
    <div className="container mx-auto mt-4 flex justify-center">
      <div className="mr-4 p-4 bg-gray-200 rounded-md">
        <div className="text-lg font-semibold">Temperatura</div>
        {/* Aquí puedes agregar cualquier otro contenido relacionado con la temperatura */}
      </div>
      <div className="ml-4 p-4 bg-gray-200 rounded-md">
        <div className="text-lg font-semibold">Humedad</div>
        {/* Aquí puedes agregar cualquier otro contenido relacionado con la humedad */}
      </div>
    </div>
  </div>
    
  );
}