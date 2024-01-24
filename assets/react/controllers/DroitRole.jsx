// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Role = () => {
//     const [roleUtilisateur, setRoleUtilisateur] = useState('');

//     useEffect(() => {
//         // Effectuez la requête pour obtenir le rôle de l'utilisateur
//         axios.get('/api/utilisateur/role')
//             .then(response => {
//                 setRoleUtilisateur(response.data.role);
//             })
//             .catch(error => {
//                 console.error('Erreur lors de la récupération du rôle', error);
//             });
//     }, []);

//     return (
//         <div>
//             {roleUtilisateur === 'admin' && <button>Actions Administrateur</button>}
//             {roleUtilisateur === 'utilisateur' && <button>Actions Utilisateur</button>}
//         </div>
//     );
// }

// export default Role;
