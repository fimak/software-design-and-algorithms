import { Item } from './Item';

export abstract class Weapon extends Item {
  private readonly MODIFIER_CHANGE_RATE: number = 0.05;
  private readonly baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private readonly durabilityModifier: number;

  protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.damageModifier = Math.round(Math.random() / 2 * 1000) / 10000;
    this.durabilityModifier = Math.round(Math.random() / 2 * 1000) / 10000;
  }

  public toString(): string {
    return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.baseDamage + this.damageModifier}, Durability: ${this.baseDurability + this.durabilityModifier}`;
  }

  public use(): string {
    if (this.baseDurability <= 0) {
      return `You can't use the ${this.getName()}, it is broken!`;
    }
    this.baseDurability -= this.MODIFIER_CHANGE_RATE;
    return `You use the ${this.getName()}, dealing ${this.baseDamage + this.damageModifier} points of damage. ${this.baseDurability <= 0 ? `The ${this.getName()} breaks.` : ''}`;
  }

  public getDamageModifier() {
    return this.damageModifier;
  }

  public setDamageModifier(modifier) {
    this.damageModifier = modifier;
  }
}
