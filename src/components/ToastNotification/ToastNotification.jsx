import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { setHideNotification } from '../../redux/notifier/notifier';

const ToastMessage = () => {
  const type = useSelector((state) => state.notificationInfoReducer.type);
  const show = useSelector((state) => state.notificationInfoReducer.show);
  const message = useSelector((state) => state.notificationInfoReducer.message);
  const dispatch = useDispatch();
  const className = cn('align-items-center text-white border-0 rounded ', {
    show: show,
    [`bg-${type}`]: show,
  });

  useEffect(() => {
    const duration = 3000;
    const timer = setTimeout(() => dispatch(setHideNotification()), duration);
    return () => {
      clearTimeout(timer);
    };
  }, [show, dispatch]);

  return (
    show && (
      <div className='position-fixed top-0 end-0 p-3 mt-5'>
        <div
          className={className}
          role='alert'
          aria-live='assertive'
          aria-atomic='true'
        >
          <div className='d-flex'>
            <div className='toast-body'>
              {type === 'success' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-check-lg'
                  viewBox='0 0 16 16'
                >
                  <path d='M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-x-lg'
                  viewBox='0 0 16 16'
                >
                  <path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z' />
                </svg>
              )}{' '}
              {message}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ToastMessage;
