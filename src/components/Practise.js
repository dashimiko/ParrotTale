/* eslint-disable import/no-extraneous-dependencies */
/* import { useState, useCallback } from 'react';
import { BarChart, XAxis, ResponsiveContainer, Bar, Cell } from 'recharts';
import Modal from 'react-modal';
import './Practise.scss';

const tikets = [
  { _id: 1346, date: '1 января', price: 3000, from: 'moscow', to: 'tver' },
  { _id: 24555, date: '2 января', price: 3000, from: 'moscow', to: 'tver' },
  { _id: 35666, date: '3 января', price: 3000, from: 'moscow', to: 'tver' },
  { _id: 456666, date: '4 января', price: 4780, from: 'moscow', to: 'tver' },
  { _id: 55543, date: '5 января', price: 3890, from: 'moscow', to: 'tver' },
  { _id: 64444, date: '6 января', price: 3390, from: 'moscow', to: 'tver' },
  { _id: 7344443, date: '7 января', price: 5490, from: 'moscow', to: 'tver' },
  { _id: 83332, date: '8 января', price: 4490, from: 'moscow', to: 'tver' },
  { _id: 934344, date: '9 января', price: 5590, from: 'moscow', to: 'tver' },
  { _id: 1034243, date: '10 января', price: 6590, from: 'moscow', to: 'tver' },
  { _id: 1124342, date: '11 января', price: 3590, from: 'moscow', to: 'tver' },
  { _id: 124234, date: '12 января', price: 4567, from: 'moscow', to: 'tver' },
  { _id: 13243324, date: '13 января', price: 5000, from: 'moscow', to: 'tver' },
  { _id: 1442243, date: '14 января', price: 3000, from: 'moscow', to: 'tver' },
];

const data = tikets.map(({ date, price, _id, from, to }) => ({
  name: date,
  uv: price,
  id: _id,
  destination: to,
  departure: from,
}));

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeItem = data[activeIndex];

  const handleClick = useCallback((entry, index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div>
      <p>Click each rectangle </p>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry) => (
              <Cell
                radius={[5, 5, 0, 0]}
                cursor="pointer"
                fill={entry.id === activeItem.id ? '#82ca9d' : '#EBA534'}
                key={entry.id}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Item Details"
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            width: '150px',
            height: '150px',
          },
        }}
      >
        <p>{`Дата: ${activeItem.name}, Цена: от ${activeItem.uv} руб.,Куда: ${activeItem.destination},Откуда: ${activeItem.departure}`}</p>
        <button className="modal_button" type="button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
} */

import { useState, useCallback } from 'react';
import {
  BarChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  Cell,
} from 'recharts';
import './Practise.scss';
import CustomTooltip from './CustomTooltip';

const tikets = [
  { _id: 1346, date: '1 января', price: 3000, from: 'moscow', to: 'tver' },
  { _id: 24555, date: '2 января', price: 3000, from: 'moscow', to: 'tver' },
  { _id: 35666, date: '3 января', price: 3000, from: 'moscow', to: 'tver' },
  { _id: 456666, date: '4 января', price: 4780, from: 'moscow', to: 'tver' },
  { _id: 55543, date: '5 января', price: 3890, from: 'moscow', to: 'tver' },
  { _id: 64444, date: '6 января', price: 3390, from: 'moscow', to: 'tver' },
  { _id: 7344443, date: '7 января', price: 5490, from: 'moscow', to: 'tver' },
  { _id: 83332, date: '8 января', price: 4490, from: 'moscow', to: 'tver' },
  { _id: 934344, date: '9 января', price: 5590, from: 'moscow', to: 'tver' },
  { _id: 1034243, date: '10 января', price: 6590, from: 'moscow', to: 'tver' },
  { _id: 1124342, date: '11 января', price: 3590, from: 'moscow', to: 'tver' },
  { _id: 124234, date: '12 января', price: 4567, from: 'moscow', to: 'tver' },
  { _id: 13243324, date: '13 января', price: 5000, from: 'moscow', to: 'tver' },
  { _id: 1442243, date: '14 января', price: 3000, from: 'moscow', to: 'tver' },
];

const data = tikets.map(({ date, price, _id, from, to }) => ({
  name: date,
  uv: price,
  id: _id,
  destination: to,
  departure: from,
}));

export default function Practise() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const activeItem = data[activeIndex];

  const handleMouseEnter = useCallback((entry, index) => {
    setActiveIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(-1);
  }, []);

  return (
    <div>
      <p>Click each rectangle </p>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'transparent' }}
          />
          <Bar dataKey="uv">
            {data.map((entry, index) => (
              <Cell
                radius={[5, 5, 0, 0]}
                cursor="pointer"
                fill={index === activeIndex ? '#82ca9d' : '#EBA534'}
                key={entry.id}
                onMouseEnter={() => handleMouseEnter(entry, index)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
