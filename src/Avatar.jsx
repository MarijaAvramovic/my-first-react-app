import getImageUrl from "./utils";


 
function Avatar2({ person, size }) {
  return (
    <img

      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
         width={size}
      height={size}
    />
  );
}

 

export default function Profile() {
   return (
     
    <div>
     
      <Avatar2
         size={80}
        person={{
          name: 'Aklilu Lemma', 
          imgId: 'OKS67lh'
        }}
      />
      <Avatar2
      size={50}
        person={{ 
          name: 'Lin Lanying',
          imgId: '1bX5QH6'
        }}
      />
    </div>
   );
}
