const { query } = require("../libs/db");
const bcrypt = require("bcrypt");

class User{

    constructor(data){
        const {name, email, password, password_confirmation} = data;
        this.name = name;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation;
    };

    validate(){
        if(!this.name || !this.email || !this.password || !this.password_confirmation){
            return {
                success: false,
                message: "No ha llenado todos los campos"
            };
        }
        if(this.password!==this.password_confirmation){
            return {
                success: false,
                message: "Las contraseñas no coinciden"
            };
        }
        return{
            success:true,
            data:{
                name:this.name,
                email: this.email,
                password: bcrypt.hashSync(this.password, 10) //Hashing
            }
        };
    };

    //password: contraseña del form, user: consulta del usuario
    static validateCredentials(password, user){
        const passwordUser = bcrypt.compareSync(password, user.password);

        if(!passwordUser){
            return{
                success:false,
                message:"Las credenciales son incorrectas"
            };
        }
        delete user.password;
        return {
            success:true,
            message:"Credenciales correctas",
            data: user
        };
    };

    static async getUserByEmail(email){
        const result = await query("SELECT * FROM users WHERE email = ?", [email]);
        if(result.success && result.data[0]){
            return{
                success:true,
                data: result.data[0]
            };
        }
        return {
            success:false,
            message: "No se encuentra registrado"
        };
    }

    static async create(data){
        const result = await query("INSERT INTO users(??) VALUES(?)",[Object.keys(data), Object.values(data)]);
        if(result.success){
            //se retira la contraseña
            delete data.password;
            return{
                success:true,
                data: data
            };
        }
        return result;
    };
};

module.exports = User;