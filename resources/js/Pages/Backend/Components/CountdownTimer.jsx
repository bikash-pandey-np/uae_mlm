import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';

const CountdownTimer = ({ ends_at, trade_id, status }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const endDate = new Date(ends_at).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const seconds = Math.floor(distance / 1000);

      setRemainingSeconds(seconds);

      if (distance < 0) {
        clearInterval(interval);
        setRemainingSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [ends_at]);

  // Function to format remaining seconds into MM:SS format
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  const passTrade = (e) => {
    e.preventDefault();

    if (status === "Setelled") {
      alert('Already settled');
    } else {
      const trade_id = e.target.getAttribute('trade_id');
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Pass it!',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.isConfirmed) {
          // Perform POST request using Inertia.post
          Inertia.post(route('admin.pass_trade'), {
            id: trade_id
          }, {
            onSuccess: () => {
              // Handle success response
            },
            onError: (errors) => {
              // Handle error response
              alert('Failed to pass trade.'); // You can use SweetAlert or any other alert library here
            },
          });

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Nothing was done :)', 'error');
        }
      });
    }
    console.log(trade_id);
  };


  const failTrade = (e) => {
    e.preventDefault();

    if (status === "Setelled") {
      alert('Already settled');
    } else {
      const trade_id = e.target.getAttribute('trade_id');
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Pass it!',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.isConfirmed) {
          // Perform POST request using Inertia.post
          Inertia.post(route('admin.fail_trade'), {
            id: trade_id
          }, {
            onSuccess: () => {
              // Handle success response
            },
            onError: (errors) => {
              // Handle error response
              alert('Failed to pass trade.'); // You can use SweetAlert or any other alert library here
            },
          });

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelled', 'Nothing was done :)', 'error');
        }
      });
    }
    console.log(trade_id);
  };

  return (
    <div>
      {remainingSeconds <= 0 ? (
        <>
          <a className='px-4 py-2 bg-green-500 text-white cursor-pointer'
             trade_id={trade_id}
             onClick={(e) => passTrade(e)}>Pass</a>
          <a className='px-4 py-2 bg-red-500 text-white ml-3 cursor-pointer'
             trade_id={trade_id}
             onClick={(e) => failTrade(e)}>Fail</a>
        </>
      ) : (
        <p>Remaining time: {formatTime(remainingSeconds)}</p>
      )}
    </div>
  );
};

export default CountdownTimer;
