package com.example.sensores;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity implements SensorEventListener {

    private SensorManager sensorManager;
    private Sensor sensorTemperatura, sensorUmidade, sensorLuz;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        //construit/criar
        sensorManager = (SensorManager) getSystemService(SENSOR_SERVICE);
        sensorTemperatura = sensorManager.getDefaultSensor(Sensor.TYPE_AMBIENT_TEMPERATURE);
        sensorUmidade = sensorManager.getDefaultSensor(Sensor.TYPE_RELATIVE_HUMIDITY);
        sensorLuz = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);

        // verificar se funciona
        if (sensorTemperatura != null) {
            sensorManager.registerListener(this, sensorTemperatura, sensorManager.SENSOR_DELAY_NORMAL);
        } else {
            Toast.makeText(this, "O sensor de TEMPERATURA não está fucnionando", Toast.LENGTH_SHORT).show();
        }
        if (sensorUmidade != null) {
            sensorManager.registerListener(this, sensorUmidade, sensorManager.SENSOR_DELAY_NORMAL);
        } else {
            Toast.makeText(this, "O sensor de UMIDADE não está fucnionando", Toast.LENGTH_SHORT).show();
        }
        if (sensorLuz != null) {
            sensorManager.registerListener(this, sensorLuz, sensorManager.SENSOR_DELAY_NORMAL);
        } else {
            Toast.makeText(this, "O sensor de LUZ não está fucnionando", Toast.LENGTH_SHORT).show();
        }
    }

    //metodos implementados pelo sensorEventListener
    // para quando mudarmos os valores no emulador
    @Override
    public void onSensorChanged(SensorEvent sensorEvent) {
        Log.i("SENSOR", "Temperatura: " + sensorEvent.values[0] + "°C");
        Log.i("SENSOR", "Umidade: " + sensorEvent.values[0] + "%");
        Log.i("SENSOR", "Luz: " + sensorEvent.values[0]);
    }

    //para modificação de configuração que o usuário faz
    @Override
    public void onAccuracyChanged(Sensor sensor, int i) {

    }
}