export const clase = (...args:string[])=>{
    console.log(args)
    return args.filter(Boolean).join(" ")
}