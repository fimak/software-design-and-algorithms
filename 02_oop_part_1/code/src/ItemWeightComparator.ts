import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    private first;
    private second;

    constructor(first?: Item, second?: Item) {
        this.first = first;
        this.second = second;
    }

    public compare(first: Item, second: Item): number {
        if (first.getWeight() > second.getWeight()) {
            return 1;
        } else if (first.getWeight() < second.getWeight()) {
            return -1;
        }
        return first.compareTo(second);
    }
}
