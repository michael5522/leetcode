// import ListItem from './ListItem'

// const List = ({items}) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <ListItem key={item.id} item={item} />
//       ))}
//     </ul>
//   )
// }
// export default List;

// import Item from './ListItem'
// const List = ({items}) => {
//   return (
//     <ul>
//       {items.map(x => (
//         <Item  key={x.id} item={x}/>
//       ))}
//     </ul>

//   )
// }

// export default List;
import Item from './ListItem'
const List = ({poo})=> {
  return (
    <ul>
    {poo.map(x=>(
      <Item detail={x} key={x.id}/>
    ))}
    </ul>
  )
}

export default List;
