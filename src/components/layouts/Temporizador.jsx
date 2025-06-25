// src/components/Temporizador.jsx
import React, { useEffect, useState } from "react";

// Componente de círculo individual personalizado
const ProgressCircle = ({ value, max, unit }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div style={{ textAlign: "center", margin: "0 10px" }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#ddd"
          strokeWidth="6"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#ff0080"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div style={{ 
        position: 'relative', 
        top: '-80px', 
        color: "#ff0080", 
        fontSize: "2em", 
        fontWeight: "bold" 
      }}>
        {String(value).padStart(2, "0")}
      </div>
      <p style={{ fontSize: "1em", marginTop: "-60px" }}>{unit}</p>
    </div>
  );
};

// Componente principal
export default function Temporizador() {
  const [time, setTime] = useState({
    years: 2,
    months: 4,
    days: 17,
    hours: 2,
    minutes: 2,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        // Incrementa segundos
        let newSeconds = prev.seconds + 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;
        let newMonths = prev.months;
        let newYears = prev.years;

        // Verifica rollover de segundos
        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
        }

        // Verifica rollover de minutos
        if (newMinutes >= 60) {
          newMinutes = 0;
          newHours += 1;
        }

        // Verifica rollover de horas
        if (newHours >= 24) {
          newHours = 0;
          newDays += 1;
        }

        // Verifica rollover de dias (considerando 30 dias por mês)
        if (newDays > 30) {
          newDays = 1;
          newMonths += 1;
        }

        // Verifica rollover de meses
        if (newMonths > 12) {
          newMonths = 1;
          newYears += 1;
        }

        return {
          years: newYears,
          months: newMonths,
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap",flexShrink: 100 }}>
      <ProgressCircle value={time.years} max={10} unit="Anos" />
      <ProgressCircle value={time.months} max={12} unit="Meses" />
      <ProgressCircle value={time.days} max={30} unit="Dias" />
      <ProgressCircle value={time.hours} max={24} unit="Horas" />
      <ProgressCircle value={time.minutes} max={60} unit="Minutos" />
      <ProgressCircle value={time.seconds} max={60} unit="Segundos" />
    </div>
  );
}