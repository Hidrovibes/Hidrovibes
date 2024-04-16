"use client"
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Home() {
    const [phData, setPhData] = useState<{ time: string; ph: number; }[]>([]);

    useEffect(() => {
        const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
        
        client.on('connect', function() {
            console.log('Conectado al broker MQTT');
            client.subscribe('Salida/01', function(err) {
                if (!err) {
                    console.log('Suscripción exitosa a Salida/01');
                } else {
                    console.error('Error en la suscripción:', err);
                }
            });
        });

        client.on('message', function(topic, message) {
            if (topic === 'Salida/01') {
                const data = message.toString().trim().split(/[:,]/); // Dividir el mensaje en partes
                console.log('Mensaje recibido:', data); // Depurar el mensaje recibido
                if (data.length === 2) { // Verificar que haya dos partes en el mensaje
                    const sensor = data[0].trim().toLowerCase(); // Convertir a minúsculas
                    const valor = parseFloat(data[1].trim()); // Segundo valor es el valor del sensor
                    const time = getCurrentTime(); // Obtener el tiempo actual

                    if (!isNaN(valor)) { // Verificar si el valor es un número válido
                        if (sensor === 'ph') {
                            setPhData(prevData => [...prevData, { time, ph: valor }]);
                        }
                    }
                }
            }
        });

        return () => {
            client.end();
            console.log('Desconectado del broker MQTT');
        };
    }, []);

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;

    }

    return (
      <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Hidrovibes</div>
        </div>
      </header>
      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-screen-xl">
          <h1 className="font-serif text-2xl text-center font-medium text-sky-500">Sensor de PH</h1>
          
          <LineChart
              width={1100}
              height={500}
              data={phData} // Mostrar datos de pH
          >
              <XAxis dataKey="time" />
              <YAxis
                  domain={[0, 14]} // Establecer el rango del eje Y para pH (0-14)
                  label={{ value: 'pH', angle: -90, position: 'insideLeft' }}
              />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="ph" stroke="#FF3333" strokeWidth={3} />
              <Tooltip />
              <Legend />
          </LineChart>
        </div>
      </div>
    </div>
    
    );
}