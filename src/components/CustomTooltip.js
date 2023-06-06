function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Дата: ${label}`}</p>
        <p>{`Цена: ${payload[0].value} руб.`}</p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
