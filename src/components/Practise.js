/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { BarChart, XAxis, ResponsiveContainer, Bar, Cell } from 'recharts';
import Modal from 'react-modal';
import './Practise.scss';

const tikets = [
  { date: '1 января', price: 3000, from: 'moscow', to: 'tver' },
  { date: '2 января', price: 3000, from: 'moscow', to: 'tver' },
  { date: '3 января', price: 3000, from: 'moscow', to: 'tver' },
  { date: '4 января', price: 4780, from: 'moscow', to: 'tver' },
  { date: '5 января', price: 3890, from: 'moscow', to: 'tver' },
  { date: '6 января', price: 3390, from: 'moscow', to: 'tver' },
  { date: '7 января', price: 5490, from: 'moscow', to: 'tver' },
  { date: '8 января', price: 4490, from: 'moscow', to: 'tver' },
  { date: '9 января', price: 5590, from: 'moscow', to: 'tver' },
  { date: '10 января', price: 6590, from: 'moscow', to: 'tver' },
  { date: '11 января', price: 3590, from: 'moscow', to: 'tver' },
  { date: '12 января', price: 4567, from: 'moscow', to: 'tver' },
  { date: '13 января', price: 5000, from: 'moscow', to: 'tver' },
  { date: '14 января', price: 3000, from: 'moscow', to: 'tver' },
];

const data = tikets.map(({ date, price }) => ({ name: date, uv: price }));

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
            {data.map((entry, index) => (
              <Cell
                radius={[5, 5, 0, 0]}
                cursor="pointer"
                fill={index === activeIndex ? '#82ca9d' : '#EBA534'}
                // eslint-disable-next-line react/no-array-index-key
                key={`cell-${index}`}
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
        <p>{`${activeItem.name}: ${activeItem.uv}`}</p>
        <button className="modal_button" type="button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}
