 export function FavoriteFood (){
    return <div>
        <h2>My favorite food is pasta.</h2>
    </div>
}

  export function FavoriteDrink (){
    return  <div>
  <h1>Test title</h1>
   <svg>
    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
  </svg>
  <form>
    <input type="text" />
  </form>
</div>
}

export   function Bio() {
  return (
    <> 
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br /><br />
      <b>And <i>pictures</i></b> of scientists!
    </p>

    </>
  );
}

export  function Avatar() {
 
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara'
      return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

export   function TodoList() {
  const name = 'Hedy Lamarr';
  return (
    <>
    <h1>{name}'s To Do List</h1>
     <h1>To Do List for {marija()}</h1>
     </>
  );
}

const today = new Date();

function marija() {
  return   <>
    <h1> zdravo danas je petak </h1>
     
     </>
}
const person = {
    name: 'Marija Avr',
    theme: {
        backgroundColor: 'pink',
        color: 'white'
    },
    photo: 'https://i.imgur.com/7vQD0fPs.jpg'
};

export   function MyList() {
  return (
    <ul style={{
      backgroundColor: 'purple',
      color: 'white'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

export function MarijaStraja() {
    return(
        
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <img src={person.photo} alt={person.name} />

                <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
            </div>
        
    );
};

  


 