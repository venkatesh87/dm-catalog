import { Menu } from './../interface/menu';
import { MenuModel } from './menu.model';
import { MenuItemModel } from './menu-item.model';

describe('MenuModel', () => {
  describe('Api', () => {
    describe('.create()', () => {
      it('.should be defined', () => {
        expect(MenuModel.create).toEqual(jasmine.any(Function));
      });

      describe('Without args passed in', () => {
        let instance: MenuModel;

        beforeEach(() => {
          instance = MenuModel.create();
        });

        it('should have empty array of items', () => {
          expect(instance.menuItems).toEqual([]);
        });
      });

      describe('With args passed in', () => {
        let instance: MenuModel;

        beforeEach(() => {
          instance = MenuModel.create([
            MenuItemModel.create({ id: '1' }),
            MenuItemModel.create({ id: '2' }),
            MenuItemModel.create({ id: '3' })
          ]);
        })

        it('should create new instance with proper menu items count', () => {
          expect(instance.menuItems.length).toEqual(3);
        });

        it('should create new instance with proper menu items passed', () => {
          expect(instance.menuItems[0].id).toEqual('1');
          expect(instance.menuItems[1].id).toEqual('2');
          expect(instance.menuItems[2].id).toEqual('3');
        });
      });
    });

    describe('.addItem()', () => {
      it('should be defined', () => {
        expect(MenuModel.prototype.addItem).toEqual(jasmine.any(Function));
      });

      it('should add item to menu', () => {
        const instance = MenuModel.create();
        const item1 = MenuItemModel.create({ id: '1', selected: false });

        instance.addItem(item1);

        expect(instance.menuItems[0]).toEqual(item1);
      });
    });

    describe('.removeItem()', () => {
      it('should be defined', () => {
        expect(MenuModel.prototype.removeItem).toEqual(jasmine.any(Function));
      });

      it('should remove item from menu if exists in menu', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: true });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create([item1, item2, item3]);
        instance.removeItem(item2);

        expect(instance.menuItems).toEqual([item1, item3]);
      });

      it('should do nothing if item does not exist in menu', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: true });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create([item1, item2]);
        instance.removeItem(item3);

        expect(instance.menuItems).toEqual([item1, item2]);
      });
    });

    describe('.hasSelection()', () => {
      it('should be defined', () => {
        expect(MenuModel.prototype.hasSelection).toEqual(jasmine.any(Function));
      });

      it('should true if selected item exists', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: true });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create([item1, item2, item3]);

        expect(instance.hasSelection()).toBe(true);
      });

      it('should return false if selected item does not exist', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: false });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create([item1, item2, item3]);

        expect(instance.hasSelection()).toBe(false);
      });
    });

    describe('.selectedItem()', () => {
      it('should be defined', () => {
        expect(MenuModel.prototype.selectedItem).toEqual(jasmine.any(Function));
      });

      it('should return selected item if exists', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: true });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create([item1, item2, item3]);

        expect(instance.selectedItem()).toBe(item2);
      });

      it('should return undefined item if does not exist', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: false });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create([item1, item2, item3]);

        expect(instance.selectedItem()).toBeUndefined();
      });
    });

    describe('.selectableItems()', () => {
      it('should be defined', () => {
        expect(MenuModel.prototype.selectableItems).toEqual(jasmine.any(Function));
      });

      it('should return empty array if nothing is selectable', () => {
        const item1 = MenuItemModel.create({ id: '1', disabled: true });
        const item2 = MenuItemModel.create({ id: '2', disabled: true });
        const item3 = MenuItemModel.create({ id: '3', disabled: true });

        const instance = MenuModel.create([item1, item2, item3]);

        expect(instance.selectableItems()).toEqual([]);
      });

      it('should return array of items which are selectable', () => {
        const item1 = MenuItemModel.create({ id: '1' });
        const item2 = MenuItemModel.create({ id: '2', disabled: true });
        const item3 = MenuItemModel.create({ id: '3' });
        const item4 = MenuItemModel.create({ id: '4', disabled: true });
        const item5 = MenuItemModel.create({ id: '5' });

        const instance = MenuModel.create([item1, item2, item3, item4, item5]);

        expect(instance.selectableItems()).toEqual([item1, item3, item5]);
      });
    });
  });
});