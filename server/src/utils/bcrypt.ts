import brypt from 'bcryptjs'



export const hashedValue = async (value: string, salt: number =10) => {
   return await brypt.hash(value, salt)
}


export const compareValue = async (value: string, hashedValue: string) => {
   return await brypt.compare(value, hashedValue)
}

