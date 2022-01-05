import {
  coin,
  StdFee
} from "@cosmjs/stargate";
import {makeDelegateMsg, makeSendMsg, makeUndelegateMsg, makeWithDrawMsg} from "../helpers/ethereum/lib/eth-transaction/Msg"

export const transfer = async (client, address, amount, recipient) => {
  let fee = {
    amount: [],
    gas: "200000",
  };
  const denom = process.env.REACT_APP_DENOM
  const msg = makeSendMsg(address, recipient, amount, denom)

  const result = await client.signAndBroadcast(
    address,
    [msg],
    fee,
  );
  return result
}

export const delegate = async (client, address, amount, recipient) => {
  let fee = {
    amount: [],
    gas: "200000",
  };

  const denom = process.env.REACT_APP_DENOM
  const msg = makeDelegateMsg(address, recipient, amount, denom)

  const result = await client.signAndBroadcast(
    address,
    [msg],
    fee,
  );
  return result

}

export const unbonding = async (client, address, amount, recipient) => {
  let fee = {
    amount: [],
    gas: "200000",
  };
  const denom = process.env.REACT_APP_DENOM
  const msg = makeUndelegateMsg(address, recipient, amount, denom)

  const result = await client.signAndBroadcast(
    address,
    [msg],
    fee,
  );
  return result
}

export const withDraw = async (client, address, validatorAddress) => {
  let fee = {
    amount: [],
    gas: "200000",
  };
  const msg = makeWithDrawMsg(address, validatorAddress)

  const result = await client.signAndBroadcast(
    address,
    [msg],
    fee,
  );
  return result
}