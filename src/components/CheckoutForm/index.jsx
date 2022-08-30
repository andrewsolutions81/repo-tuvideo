// CheckoutForm component index.jsx
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.styles.css';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error('error on checkout form', error);
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethod,
        amount: 10_000, // cents -> $100
      }),
    };
    const puertico = 3001;
    const response = await fetch(`http://localhost:${puertico}/api/checkout`, options);
    const body = await response.json();
    console.log('Fetching from api checkout:', body);
    // elements.getElement(CardElement).clear();
  };

  return (
    <div className="CheckoutForm">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" className="credit-card-button">Submit Credit Card Information</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
