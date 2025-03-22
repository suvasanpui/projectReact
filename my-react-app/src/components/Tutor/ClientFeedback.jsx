import { FaStar, FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Since Card is not available, let's use a div with card-like styling
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

// StarRating Component
const StarRating = ({ rating = 0 }) => {
    // Ensure rating is a number and within 0-5 range
    const validRating = Math.min(Math.max(Number(rating) || 0, 0), 5);
    
    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
                <FaStar 
                    key={index} 
                    className={`${index < validRating ? 'text-yellow-500' : 'text-gray-200'} w-4 h-4`} 
                />
            ))}
        </div>
    );
};

StarRating.propTypes = {
  rating: PropTypes.number
};

// RatingSummary Component
const RatingSummary = () => {
    return (
        <Card className="p-6 w-full md:w-80 sticky top-4">
            <h2 className="text-2xl font-bold mb-3">4.5 out of 5</h2>
            <StarRating rating={4} />
            <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-3">
                        <span className="w-16 text-sm font-medium">{star} Stars</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                            <div className="h-full bg-yellow-500 rounded-full transition-all duration-300" style={{ width: `${star * 20}%` }}></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">10</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};


// FeedbackCard Component
const FeedbackCard = ({ name = '', date = '', rating = 0, text = '' }) => {
    return (
        <Card className="p-6 w-full mb-4 hover:scale-[1.01] transition-transform">
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-full">
                    <FaUser className="text-purple-600 w-4 h-4" />
                </div>
                <div>
                    <p className="font-semibold text-gray-800">{name || 'Anonymous'}</p>
                    <p className="text-sm text-gray-500">{date || 'No date'}</p>
                </div>
            </div>
            <StarRating rating={Number(rating) || 0} />
            <p className="mt-3 text-gray-600 leading-relaxed">{text || 'No feedback provided'}</p>
        </Card>
    );
};

FeedbackCard.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

// FeedbackList Component
const FeedbackList = () => {
    const feedbacks = [
        { name: 'Jon Doe', date: '21 Dec 2024', rating: 4, text: 'I was a novice in chess. Professor diligently taught me day and night.' },
        { name: 'Jon Doe', date: '21 Dec 2024', rating: 4, text: 'I was a novice in chess. Professor diligently taught me day and night.' }
    ];
    return (
        <div className="w-full">
            {feedbacks.map((feedback, index) => (
                <FeedbackCard key={index} {...feedback} />
            ))}
        </div>
    );
};

// Main Client Feedback Component
const ClientFeedback = () => {
    return (
        <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Client Feedback</h1>
                    <p className="text-gray-600 mt-1">5 Reviews</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow order-2 md:order-1">
                    <FeedbackList />
                </div>
                <div className="w-full md:w-80 order-1 md:order-2">
                    <RatingSummary />
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;
