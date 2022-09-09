import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51LagzPJVaNtybgLht69SwwZes3urXuIvxMOfIFGJeZk3xTw93xU5KpA9Nqi6q5Ge6ykUyLVDbdEghSr9W4WLahDg00wC2bj7XU');

function Payment() {
  return (
    <div className="creditcard">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
