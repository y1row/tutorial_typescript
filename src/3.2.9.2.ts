type GoodMan = { name: string, goodMind: true }
type EvilMan = { name: string, evilMind: true, hasWeapon: true }
type GoodOrEvil = GoodMan | EvilMan // 合併型 (union 型)
type GoodAndEvil = GoodMan & EvilMan // 交差型 (intersection 型)

// 合併型 (union 型)
//
// GoodMan 型
let a: GoodOrEvil = {
  name: 'good',
  goodMind: true,
}
console.log(a)

// EvilMan 型
a = {
  name: 'evil',
  evilMind: true,
  hasWeapon: true,
}
console.log(a)

// GoodMan と EvilMan 両方
// (goodMind と evilMind をコメントにするとエラー -> どちらでも無くなってしまうので)
a = {
  name: 'good_or_evil',
  goodMind: true,
  evilMind: true,
  hasWeapon: true,
}
console.log(a)

// 交差型 (intersection 型)
// GoodMan と EvilMan 両方の全プロパティが無いとエラーになる
let b: GoodAndEvil = {
  name: 'good_and_evil',
  goodMind: true,
  evilMind: true,
  hasWeapon: true,
}
console.log(b)
