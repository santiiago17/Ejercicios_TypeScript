interface User {
    username: string;
    email: string;
}

interface Admin extends User {
    adminLevel: number;
}
function imprimirDatosUsuario(usuario: User | Admin) {
    console.log(`Username: ${usuario.username}`);
    console.log(`Email: ${usuario.email}`);
    
    if ('adminLevel' in usuario) {
        console.log(`Nivel de administrador: ${usuario.adminLevel}`);
    }
}

const usuarioNormal: User = {
    username: 'usuario123',
    email: 'usuario@example.com'
};

const adminUsuario: Admin = {
    username: 'admin123',
    email: 'admin@example.com',
    adminLevel: 2
};

imprimirDatosUsuario(usuarioNormal);
imprimirDatosUsuario(adminUsuario);
