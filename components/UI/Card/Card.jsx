function Card({ children }) {
    return (
        <div className='w-[calc(50%-.5rem)] flex bg-white p-4 rounded-lg shadow-sm'>
            {children}
        </div>
    );
}

export default Card;
