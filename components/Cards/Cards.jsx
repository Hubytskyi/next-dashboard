import Card from "@/components/UI/Card";

const cardsList = [
    { id: 1, price: '$4,999', category: 'Phones', info: '+42%' },
    { id: 2, price: '$6,123', category: 'Laptops', info: '+21%' },
    { id: 3, price: '$1,296', category: 'Tablets', info: '+12%' },
]

function Cards() {
    return (
        <div className='flex flex-wrap gap-4'>
            {cardsList.map((item) => (
                <Card key={item.id}>
                    <div className='flex-grow'>
                        <div className='text-2xl font-bold'>{item.price}</div>
                        <div className='text-gray-400 text-sm'>{item.category}</div>
                    </div>
                    <div className='bg-emerald-300 flex items-center p-2 rounded-lg text-xs font-bold'>
                        {item.info}
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default Cards;
