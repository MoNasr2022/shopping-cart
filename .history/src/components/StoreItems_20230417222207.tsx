

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

function StoreItems({id, name, price, imgUrl}: StoreItemsProps) {
  return (
    <Card>StoreItem</Card>
  )
}

export default StoreItems