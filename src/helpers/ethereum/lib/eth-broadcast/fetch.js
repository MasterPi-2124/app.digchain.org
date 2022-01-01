import axios from "axios";

const fetch_address = async (address) => {
  const api = process.env.REACT_APP_API
  const options = {
    url: `${api}/auth/accounts/${address}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };
  
  return axios(options)
  };
  
  
export const fetchAccount = async (address) => {
    // get account
    try {
      let accountOnChain = await fetch_address(address);
      console.log("account on chain", accountOnChain)
  
      const accountNumber = accountOnChain.data.result.value.account_number ? accountOnChain.data.result.value.account_number : 0
      const sequence = accountOnChain.data.result.value.sequence ? accountOnChain.data.result.value.sequence : 0

      return {
        accountNumber : accountNumber,
        sequence : sequence
      }
    } catch (err) {
      console.log(err)
      return err
    }
  }