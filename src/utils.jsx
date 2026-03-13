export default function getImageUrl(person) {
    return (
         'https://i.imgur.com/' +
         person.imgId +
         person.imgSize +
         '.jpg'
    );
};