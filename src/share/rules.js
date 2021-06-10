
const rules = () => {
       
  let  rules = {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  return rules;  
}

export default {
    rules
}