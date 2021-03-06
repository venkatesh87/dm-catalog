import { Point } from './point';
import { Rectangle } from './rectangle';
import { Overflow } from './overflow';

interface RectsEntry {
  relationName: string;
  r1: Rectangle;
  r2: Rectangle;
  isIntersect: boolean;
  isContain: boolean;
  intersectRect: Rectangle;
}

describe('Rectangle', () => {
  describe('Api', () => {
    describe('Rectangle.create()', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.create).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(r).toEqual(jasmine.any(Rectangle));
      });
    });

    describe('Rectangle.fromBounds', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.fromBounds(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.fromBounds).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(r).toEqual(jasmine.any(Rectangle));
      });

      it('should have properly set properties', () => {
        expect(Rectangle.create(1, 2, 2, 2).equals(r)).toBe(true);
      });
    });

    describe('Rectangle.fromRect', () => {
      const src = Rectangle.create(1, 2, 3, 5);
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.fromRect(src);
      });

      it('should be defined', () => {
        expect(Rectangle.fromRect).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(r).toEqual(jasmine.any(Rectangle));
      });

      it('should have properly set properties', () => {
        expect(r.equals(src)).toBe(true);
      });
    });

    describe('Rectangle.empty()', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.empty();
      });

      it('should be defined', () => {
        expect(Rectangle.empty).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(r).toEqual(jasmine.any(Rectangle));
      });

      it('should be empty rectangle', () => {
        expect(r.isEmpty()).toBe(true);
      });
    });

    describe('.left', () => {
      it('should return proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.left).toEqual(1);
      });
    });

    describe('.right', () => {
      it('should return proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.right).toEqual(4);
      });
    });

    describe('.top', () => {
      it('should breturn proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.top).toEqual(2);
      });
    });

    describe('.bottom', () => {
      it('should return proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.bottom).toEqual(6);
      });
    });

    describe('.x', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);

          expect(r.x).toEqual(1);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.x = 5;

          expect(r).toEqual(Rectangle.create(5, 2, 3, 4));
        });
      });
    });

    describe('.y', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          expect(r.y).toEqual(2);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.y = 4;

          expect(r).toEqual(Rectangle.create(1, 4, 3, 4));
        });
      });
    });

    describe('.width', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          expect(r.width).toEqual(3);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.width = 8;

          expect(r).toEqual(Rectangle.create(1, 2, 8, 4));
        });
      });
    });

    describe('.height', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          expect(r.height).toEqual(4);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.height = 7;

          expect(r).toEqual(Rectangle.create(1, 2, 3, 7));
        });
      });
    });

    describe('.clone()', () => {
      let r: Rectangle;
      let cloned: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        cloned = r.clone();
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.clone).toEqual(jasmine.any(Function));
      });

      it('should return instance with same properties', () => {
        expect(cloned).toEqual(r);
      });

      it('should return clone, new reference has to be made', () => {
        expect(r).not.toBe(cloned);
      });
    });

    describe('.setRectangle()', () => {
      let r: Rectangle;
      let rRct: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rRct = r.setRectangle(2, 3, 4, 5);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.setRectangle).toEqual(jasmine.any(Function));
      });

      it('should set proper rectangle', () => {
        expect(rRct).toEqual(Rectangle.create(2, 3, 4, 5));
      });

      it('should return this', () => {
        expect(rRct).toBe(r);
      });
    });

    describe('.setBounds()', () => {
      let r: Rectangle;
      let rBds: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rBds = r.setBounds(2, 3, 4, 5);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.setBounds).toEqual(jasmine.any(Function));
      });

      it('should set proper bounds', () => {
        expect(rBds).toEqual(Rectangle.create(2, 3, 2, 2));
      });

      it('should return this', () => {
        expect(rBds).toBe(r);
      });
    });

    describe('.copyFrom()', () => {
      let r1: Rectangle;
      let r2: Rectangle;
      let rCpy: Rectangle;

      beforeEach(() => {
        r1 = Rectangle.create(1, 2, 3, 4);
        r2 = Rectangle.create(2, 3, 4, 5);
        rCpy = r2.copyFrom(r1);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.copyFrom).toEqual(jasmine.any(Function));
      });

      it('should copy from rectangle', () => {
        expect(rCpy).toEqual(Rectangle.create(1, 2, 3, 4));
      });

      it('should return this', () => {
        expect(rCpy).toBe(r2);
      });
    });

    describe('.moveTo()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.moveTo).toEqual(jasmine.any(Function));
      });

      it('should move to coordinates', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const rMvd = r.moveTo(Point.create(12, 7));

        expect(rMvd).toEqual(Rectangle.create(12, 7, 3, 4));
      });

      it('should move to coordinates by anchor point', () => {
        const ref = Rectangle.create(2, 2, 2, 1);
        const element = Rectangle.create(0, 0, 4, 3);

        const rMvd = element.moveTo(ref.centerBottom(), element.centerTop());

        expect(rMvd).toEqual(Rectangle.create(1, 3, 4, 3));
      });

      it('should return this', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const rMvd = r.moveTo(Point.create(12, 7));

        expect(rMvd).toBe(r);
      });
    });

    describe('.moveXTo()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.moveXTo).toEqual(jasmine.any(Function));
      });

      it('should move x to coordinate', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const rMvd = r.moveXTo(5);

        expect(rMvd).toEqual(Rectangle.create(5, 2, 3, 4));
      });

      it('should move to coordinates by anchor point', () => {
        const ref = Rectangle.create(1, 2, 3, 4);
        const rMvd = ref.moveXTo(5, ref.rightBottom());

        expect(rMvd).toEqual(Rectangle.create(2, 2, 3, 4));
      });

      it('should return this', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const rMvd = r.moveXTo(5);

        expect(rMvd).toBe(r);
      });
    });

    describe('.moveYTo()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.moveYTo).toEqual(jasmine.any(Function));
      });

      it('should move x to coordinate', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const rMvd = r.moveYTo(5);

        expect(rMvd).toEqual(Rectangle.create(1, 5, 3, 4));
      });

      it('should move to coordinates by anchor point', () => {
        const ref = Rectangle.create(1, 2, 3, 4);
        const rMvd = ref.moveYTo(5, ref.centerTop());

        expect(rMvd).toEqual(Rectangle.create(1, 5, 3, 4));
      });

      it('should return this', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const rMvd = r.moveYTo(5);

        expect(rMvd).toBe(r);
      });
    });

    describe('.translate()', () => {
      let r: Rectangle;
      let rTrl: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rTrl = r.translate(2, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.translate).toEqual(jasmine.any(Function));
      });

      it('should translate coordinates', () => {
        expect(rTrl).toEqual(Rectangle.create(3, 6, 3, 4));
      });

      it('should return this', () => {
        expect(rTrl).toBe(r);
      });
    });

    describe('.translateX()', () => {
      let r: Rectangle;
      let rTrl: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rTrl = r.translateX(3);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.translateX).toEqual(jasmine.any(Function));
      });

      it('should translate x coordinate', () => {
        expect(r).toEqual(Rectangle.create(4, 2, 3, 4));
      });

      it('should return this', () => {
        expect(rTrl).toBe(r);
      });
    });

    describe('.translateY()', () => {
      let r: Rectangle;
      let rTrl: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rTrl = r.translateY(3);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.translateY).toEqual(jasmine.any(Function));
      });

      it('should translate y coordinate', () => {
        expect(r).toEqual(Rectangle.create(1, 5, 3, 4));
      });

      it('should return this', () => {
        expect(rTrl).toBe(r);
      });
    });

    describe('.scale()', () => {
      let r: Rectangle;
      let rScl: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(2, 3, 4, 5);
        rScl = r.scale(3);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.scale).toEqual(jasmine.any(Function));
      });

      it('should scale coordinates', () => {
        expect(rScl).toEqual(Rectangle.create(6, 9, 12, 15));
      });

      it('should return this', () => {
        expect(rScl).toBe(r);
      });
    });

    describe('.flipX()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.flipX).toEqual(jasmine.any(Function));
      });

      it('should flip horizontally if axis is above rectangle', () => {
        const r = Rectangle.create(3, 5, 2, 3);
        const rFlp = r.flipX(4);

        expect(rFlp).toEqual(Rectangle.create(3, 0, 2, 3));
      });

      it('should flip horizontally if axis is below rectangle', () => {
        const r = Rectangle.create(3, 0, 2, 3);
        const rFlp = r.flipX(4);

        expect(rFlp).toEqual(Rectangle.create(3, 5, 2, 3));
      });

      it('should flip horizontally if axis is inside rectangle', () => {
        const r = Rectangle.create(3, 0, 2, 3);
        const rFlp = r.flipX(2);

        expect(rFlp).toEqual(Rectangle.create(3, 1, 2, 3));
      });

      it('should return this', () => {
        const r = Rectangle.create(3, 5, 2, 3);
        expect(r.flipX(4)).toBe(r);
      });
    });

    describe('.flipY()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.flipY).toEqual(jasmine.any(Function));
      });

      it('should flip vertically if axis is on the left of rectangle', () => {
        const r = Rectangle.create(4, 2, 2, 3);
        const rFlp = r.flipY(3);

        expect(rFlp).toEqual(Rectangle.create(0, 2, 2, 3));
      });

      it('should flip vertically if axis is on the right of rectangle', () => {
        const r = Rectangle.create(0, 2, 2, 3);
        const rFlp = r.flipY(3);

        expect(rFlp).toEqual(Rectangle.create(4, 2, 2, 3));
      });

      it('should flip vertically if axis is inside rectangle', () => {
        const r = Rectangle.create(4, 2, 2, 3);
        const rFlp = r.flipY(4.5);

        expect(rFlp).toEqual(Rectangle.create(3, 2, 2, 3));
      });

      it('should return this', () => {
        const r = Rectangle.create(3, 5, 2, 3);
        expect(r.flipY(4)).toBe(r);
      });
    });

    describe('.flip()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.flip).toEqual(jasmine.any(Function));
      });

      it('should flip against point', () => {
        const r = Rectangle.create(4, 2, 2, 3);
        const flp = r.flip(Point.create(3, 6));

        expect(flp).toEqual(Rectangle.create(0, 7, 2, 3));
      });

      it('should return this', () => {
        const r = Rectangle.create(3, 5, 2, 3);
        expect(r.flip(Point.create(1, 1))).toBe(r);
      });
    });

    describe('.map()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.map).toEqual(jasmine.any(Function));
      });

      it('should map bounds according to function provided', () => {
        const r = Rectangle.fromBounds(1, 2, 4, 5);
        r.map(n => n * 2);

        expect(r).toEqual(Rectangle.fromBounds(2, 4, 8, 10));
      });

      it('should return this', () => {
        const r = Rectangle.fromBounds(1, 1, 4, 4);

        expect(r.map((n) => n)).toBe(r);
      });
    });

    describe('.isBelow()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.isBelow).toEqual(jasmine.any(Function));
      });

      it('should return true if top edge is below point', () => {
        const r = Rectangle.create(4, 7, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isBelow(p)).toEqual(true);
      });

      it('should return true if top edge touches point', () => {
        const r = Rectangle.create(4, 6, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isBelow(p)).toEqual(true);
      });

      it('should return false if top edge is above point', () => {
        const r = Rectangle.create(4, 5, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isBelow(p)).toEqual(false);
      });
    });

    describe('.isAbove()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.isAbove).toEqual(jasmine.any(Function));
      });

      it('should return true if bottom edge is above point', () => {
        const r = Rectangle.create(4, 2, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isAbove(p)).toEqual(true);
      });

      it('should return true if bottom edge touches point', () => {
        const r = Rectangle.create(4, 3, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isAbove(p)).toEqual(true);
      });

      it('should return false if bottom edge is below point', () => {
        const r = Rectangle.create(4, 4, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isAbove(p)).toEqual(false);
      });
    });

    describe('.isOnTheLeft()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.isOnTheLeft).toEqual(jasmine.any(Function));
      });

      it('should return true if right edge is on the left of point', () => {
        const r = Rectangle.create(1, 4, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isOnTheLeft(p)).toEqual(true);
      });

      it('should return true if right edge touches point', () => {
        const r = Rectangle.create(2, 4, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isOnTheLeft(p)).toEqual(true);
      });

      it('should return false if right edge is on the right of point', () => {
        const r = Rectangle.create(3, 4, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isOnTheLeft(p)).toEqual(false);
      });
    });

    describe('.isOnTheRight()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.isOnTheRight).toEqual(jasmine.any(Function));
      });

      it('should return true if left edge is on the right of point', () => {
        const r = Rectangle.create(7, 4, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isOnTheRight(p)).toEqual(true);
      });

      it('should return true if left edge touches point', () => {
        const r = Rectangle.create(6, 4, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isOnTheRight(p)).toEqual(true);
      });

      it('should return false if left edge is on the left of point', () => {
        const r = Rectangle.create(5, 4, 4, 3);
        const p = Point.create(6, 6);

        expect(r.isOnTheRight(p)).toEqual(false);
      });
    });

    describe('.position()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.position).toEqual(jasmine.any(Function));
      });

      it('should return top left position', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.position()).toEqual(Point.create(1, 2));
      });
    });

    describe('.leftTop()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.leftTop).toEqual(jasmine.any(Function));
      });

      it('should return left top point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.leftTop()).toEqual(Point.create(1, 2));
      });
    });

    describe('.centerTop()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.centerTop).toEqual(jasmine.any(Function));
      });

      it('should return center top point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.centerTop()).toEqual(Point.create(2.5, 2));
      });
    });

    describe('.rightTop()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.rightTop).toEqual(jasmine.any(Function));
      });

      it('should return right top point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.rightTop()).toEqual(Point.create(4, 2));
      });
    });

    describe('.leftCenter()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.leftCenter).toEqual(jasmine.any(Function));
      });

      it('should return left center point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.leftCenter()).toEqual(Point.create(1, 3.5));
      });
    });

    describe('.center()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.center).toEqual(jasmine.any(Function));
      });

      it('should return center point of rectangle', () => {
        const r = Rectangle.create(1, 1, 4, 6);

        expect(r.center()).toEqual(Point.create(3, 4));
      });
    });

    describe('.rightCenter()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.rightCenter).toEqual(jasmine.any(Function));
      });

      it('should return right center point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.rightCenter()).toEqual(Point.create(4, 3.5));
      });
    });

    describe('.leftBottom()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.leftBottom).toEqual(jasmine.any(Function));
      });

      it('should return left bottom point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.leftBottom()).toEqual(Point.create(1, 5));
      });
    });

    describe('.centerBottom()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.centerBottom).toEqual(jasmine.any(Function));
      });

      it('should return center bottom point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.centerBottom()).toEqual(Point.create(2.5, 5));
      });
    });

    describe('.rightBottom()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.rightBottom).toEqual(jasmine.any(Function));
      });

      it('should return right bottom point of rectangle', () => {
        const r = Rectangle.create(1, 2, 3, 3);

        expect(r.rightBottom()).toEqual(Point.create(4, 5));
      });
    });

    describe('.isEmpty()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.isEmpty).toEqual(jasmine.any(Function));
      });

      it('should return true for zero width', () => {
        const r = Rectangle.create(1, 2, 0, 5);
        expect(r.isEmpty()).toBe(true);
      });

      it('should return true for zero height', () => {
        const r = Rectangle.create(1, 2, 4, 0);
        expect(r.isEmpty()).toBe(true);
      });

      it('should return true for zero width and height', () => {
        const r = Rectangle.create(1, 2, 0, 0);
        expect(r.isEmpty()).toBe(true);
      });
    });

    describe('.union()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.union).toEqual(jasmine.any(Function));
      });

      it('should delegate to expandToContain()', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(5, 2, 1, 1);
        const fakeRect = Rectangle.create(1, 1, 1, 1);
        spyOn(Rectangle.prototype, 'expandToContain').and.callFake((r) => {
          if (r === r2) {
            return fakeRect;
          }
        });

        const result = r1.union(r2);

        expect(result).toBe(fakeRect);
      });

      it('should return new instance', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(5, 2, 1, 1);
        const result = r1.union(r2);

        expect(result).not.toBe(r1);
      });
    });

    describe('.overflows()', () => {
      let r: Rectangle;
      let parent: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        parent = Rectangle.create(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.overflows).toEqual(jasmine.any(Function));
      });

      it('should delegate to .overflowsLeft()', () => {
        spyOn(Rectangle.prototype, 'overflowsLeft').and.returnValue(true);
        spyOn(Rectangle.prototype, 'overflowsTop').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsRight').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsBottom').and.returnValue(false);

        expect(r.overflows(parent)).toBe(true);
      });

      it('should delegate to .overflowsTop()', () => {
        spyOn(Rectangle.prototype, 'overflowsLeft').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsTop').and.returnValue(true);
        spyOn(Rectangle.prototype, 'overflowsRight').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsBottom').and.returnValue(false);

        expect(r.overflows(parent)).toBe(true);
      });

      it('should delegate to .overflowsRight()', () => {
        spyOn(Rectangle.prototype, 'overflowsLeft').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsTop').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsRight').and.returnValue(true);
        spyOn(Rectangle.prototype, 'overflowsBottom').and.returnValue(false);

        expect(r.overflows(parent)).toBe(true);
      });

      it('should delegate to .overflowsBottom()', () => {
        spyOn(Rectangle.prototype, 'overflowsLeft').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsTop').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsRight').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsBottom').and.returnValue(true);

        expect(r.overflows(parent)).toBe(true);
      });

      it('should return false if all overflows<left, top, right, bottom> return false', () => {
        spyOn(Rectangle.prototype, 'overflowsLeft').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsTop').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsRight').and.returnValue(false);
        spyOn(Rectangle.prototype, 'overflowsBottom').and.returnValue(false);

        expect(r.overflows(parent)).toBe(false);
      });
    });

    describe('.overflowsLeft()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.overflowsLeft).toEqual(jasmine.any(Function));
      });

      it('should return true if this overflows other on left side', () => {
        const r1 = Rectangle.create(0, 2, 2, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsLeft(r2)).toBe(true);
      });

      it('should return false if this is inside other rect', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsLeft(r2)).toBe(false);
      });

      it('should return false if this has same size and position as other rect', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsLeft(r2)).toBe(false);
      });
    });

    describe('.overflowsTop()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.overflowsTop).toEqual(jasmine.any(Function));
      });

      it('should return true if this overflows other on top side', () => {
        const r1 = Rectangle.create(2, 0, 1, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsTop(r2)).toBe(true);
      });

      it('should return false if this is inside other rect', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsTop(r2)).toBe(false);
      });

      it('should return false if this has same size and position as other rect', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsTop(r2)).toBe(false);
      });
    });

    describe('.overflowsRight()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.overflowsRight).toEqual(jasmine.any(Function));
      });

      it('should return true if this overflows other on right side', () => {
        const r1 = Rectangle.create(3, 2, 2, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsRight(r2)).toBe(true);
      });

      it('should return false if this is inside other rect', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsRight(r2)).toBe(false);
      });

      it('should return false if this has same size and position as other rect', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsRight(r2)).toBe(false);
      });
    });

    describe('.overflowsBottom()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.overflowsBottom).toEqual(jasmine.any(Function));
      });

      it('should return true if this overflows other on bottom side', () => {
        const r1 = Rectangle.create(2, 3, 1, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsBottom(r2)).toBe(true);
      });

      it('should return false if this is inside other rect', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsBottom(r2)).toBe(false);
      });

      it('should return false if this has same size and position as other rect', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflowsBottom(r2)).toBe(false);
      });
    });

    describe('.overflow()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.overflow).toEqual(jasmine.any(Function));
      });

      it('should return proper overflow if this overflows other on left side', () => {
        const r1 = Rectangle.create(0, 2, 2, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflow(r2)).toEqual(Overflow.create(1, 0, 0, 0));
      });

      it('should return proper overflow if this overflows other on top side', () => {
        const r1 = Rectangle.create(2, 0, 1, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflow(r2)).toEqual(Overflow.create(0, 1, 0, 0));
      });

      it('should return proper overflow if this overflows other on right side', () => {
        const r1 = Rectangle.create(3, 2, 2, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflow(r2)).toEqual(Overflow.create(0, 0, 1, 0));
      });

      it('should return proper overflow if this overflows other on bottom side', () => {
        const r1 = Rectangle.create(2, 3, 1, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflow(r2)).toEqual(Overflow.create(0, 0, 0, 1));
      });

      it('should return zero overflow if this is inside other rect', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflow(r2)).toEqual(Overflow.create(0, 0, 0, 0));
      });

      it('should return zero overflow if this has same size and position as other rect', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.overflow(r2)).toEqual(Overflow.create(0, 0, 0, 0));
      });
    });

    describe('.containsRect()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.containsRect).toEqual(jasmine.any(Function));
      });

      it('should return false if this is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.empty();

        expect(empty.containsRect(r)).toBe(false);
      });

      it('should return true if other is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.empty();

        expect(r.containsRect(empty)).toBe(true);
      });

      it('return true if fully contains other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => entry.isIntersect)
          .filter(entry => entry.isContain)
          .forEach((entry) => {
            expect(entry.r1.containsRect(entry.r2)).toBe(true, entry.relationName);
          });
      });

      it('return false if intersects other rect but does not fully contain', () => {
        RectsGenerator.testRects()
          .filter(entry => entry.isIntersect)
          .filter(entry => !entry.isContain)
          .forEach((entry) => {
            expect(entry.r1.containsRect(entry.r2)).toBe(false, entry.relationName);
          });
      });

      it('return false if does not contain other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => !entry.isIntersect)
          .forEach((entry) => {
            expect(entry.r1.containsRect(entry.r2)).toBe(false, entry.relationName);
          });
      });
    });

    describe('.containsPoint()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.containsPoint).toEqual(jasmine.any(Function));
      });

      it('should return false if this is empty', () => {
        const empty = Rectangle.empty();
        const p = Point.create(1, 2);

        expect(empty.containsPoint(p)).toBe(false);
      });

      it('should return true if point is inside rect', () => {
        const r = Rectangle.create(1, 1, 3, 3);
        const p = Point.create(2, 2);

        expect(r.containsPoint(p)).toBe(true);
      });

      it('should return true if point is on left edge of the rect', () => {
        const r = Rectangle.create(1, 1, 3, 3);
        const p = Point.create(1, 2);

        expect(r.containsPoint(p)).toBe(true);
      });

      it('should return true if point is on top edge of the rect', () => {
        const r = Rectangle.create(1, 1, 3, 3);
        const p = Point.create(2, 1);

        expect(r.containsPoint(p)).toBe(true);
      });

      it('should return true if point is on left edge of the rect', () => {
        const r = Rectangle.create(1, 1, 3, 3);
        const p = Point.create(4, 2);

        expect(r.containsPoint(p)).toBe(true);
      });

      it('should return true if point is on left edge of the rect', () => {
        const r = Rectangle.create(1, 1, 3, 3);
        const p = Point.create(2, 4);

        expect(r.containsPoint(p)).toBe(true);
      });
    });

    describe('.intersects()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.intersects).toEqual(jasmine.any(Function));
      });

      it('should return false if this is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.empty();

        expect(empty.intersects(r)).toBe(false);
      });

      it('should return false if other is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.empty();

        expect(r.intersects(empty)).toBe(false);
      });

      it('should return true if intersects other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => entry.isIntersect)
          .forEach((entry) => {
            expect(entry.r1.intersects(entry.r2)).toBe(true, entry.relationName);
          });
      });

      it('should return false if does not intersect other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => !entry.isIntersect)
          .forEach((entry) => {
            expect(entry.r1.intersects(entry.r2)).toBe(false, entry.relationName);
          });
      });
    });

    describe('.intersect()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.intersect).toEqual(jasmine.any(Function));
      });

      it('should delegate to restrictTo()', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(5, 2, 1, 1);
        const fakeRect = Rectangle.create(1, 1, 1, 1);
        spyOn(Rectangle.prototype, 'restrictTo').and.callFake((r) => {
          if (r === r2) {
            return fakeRect;
          }
        });

        const result = r1.intersect(r2);

        expect(result).toBe(fakeRect);
      });

      it('should return new instance', () => {
        RectsGenerator.testRects()
          .forEach((entry) => {
            expect(entry.r1.intersect(entry.r2)).not.toBe(entry.r1);
          });
      });
    });

    describe('.restrictTo() - Restrict area of this rectangle to the intersection of both rectangles', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.restrictTo).toEqual(jasmine.any(Function));
      });

      it('should return empty rectangle if this is empty', () => {
        const empty = Rectangle.empty();
        const r = Rectangle.create(1, 2, 3, 4);
        const restricted = empty.restrictTo(r);

        expect(restricted.isEmpty()).toBe(true);
      });

      it('should return empty rectangle if other is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.empty();
        const restricted = r.restrictTo(empty);

        expect(restricted.isEmpty()).toBe(true);
      });

      it('return intersection rectangle if intersects other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => entry.isIntersect)
          .forEach((entry) => {
            expect(entry.r1.restrictTo(entry.r2)).toEqual(entry.intersectRect, entry.relationName);
          });
      });

      it('should return empty rectangle if does not intersect other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => !entry.isIntersect)
          .forEach((entry) => {
            const restricted = entry.r1.restrictTo(entry.r2);
            expect(restricted.isEmpty()).toBe(true);
          });
      });

      it('should return this', () => {
        RectsGenerator.testRects()
          .forEach((entry) => {
            expect(entry.r1.restrictTo(entry.r2)).toBe(entry.r1);
          });
      });
    });

    describe('.expandToContain()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.expandToContain).toEqual(jasmine.any(Function));
      });

      it('should return other if this is empty', () => {
        const empty = Rectangle.empty();
        const other = Rectangle.create(1, 2, 3, 4);
        const result = empty.expandToContain(other);

        expect(result).toEqual(other);
      });

      it('should return this if other is empty', () => {
        const empty = Rectangle.empty();
        const other = Rectangle.create(1, 2, 3, 4);
        const result = other.expandToContain(empty);

        expect(result).toEqual(other);
      });

      it('should return bounding rectangle for intersecting rects', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(3, 0, 3, 2);
        const result = r1.expandToContain(r2);

        expect(result).toEqual(Rectangle.create(1, 0, 5, 4));
      });

      it('should return bounding rectangle for containing rects', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(2, 2, 1, 1);
        const result = r1.expandToContain(r2);

        expect(result).toEqual(Rectangle.create(1, 1, 3, 3));
      });

      it('should return bounding rectangle for non intersecting rects', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(5, 2, 1, 1);
        const result = r1.expandToContain(r2);

        expect(result).toEqual(Rectangle.create(1, 1, 5, 3));
      });

      it('should return this', () => {
        const r1 = Rectangle.create(1, 1, 3, 3);
        const r2 = Rectangle.create(5, 2, 1, 1);
        const result = r1.expandToContain(r2);

        expect(result).toBe(r1);
      });

    });

    describe('.translateInside() - Ensure this rectangle is inside the other, if possible. Preserves w, h', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.translateInside).toEqual(jasmine.any(Function));
      });

      it('should delegate to .translateXInside()', () => {
        const r1 = Rectangle.create(0, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);
        spyOn(Rectangle.prototype, 'translateXInside').and.returnValue(r1);

        const result = r1.translateInside(r2);

        expect(r1.translateXInside).toHaveBeenCalledWith(r2);
      });

      it('should delegate to .translateYInside()', () => {
        const r1 = Rectangle.create(0, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);
        spyOn(Rectangle.prototype, 'translateYInside').and.returnValue(r1);

        const result = r1.translateInside(r2);

        expect(r1.translateYInside).toHaveBeenCalledWith(r2);
      });

      it('should return this', () => {
        const r1 = Rectangle.create(1, 1, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);
        expect(r1.translateInside(r2)).toBe(r1);
      });
    });

    describe('.translateXInside()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.translateXInside).toEqual(jasmine.any(Function));
      });

      it('should move in X axis to other rect if this is outside to the left', () => {
        const r1 = Rectangle.create(0, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(1, 2, 1, 1));
      });

      it('should move in X axis to other rect if this is outside to the right', () => {
        const r1 = Rectangle.create(4, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(3, 2, 1, 1));
      });

      it('should not move in X axis to other rect if this is outside on top', () => {
        const r1 = Rectangle.create(2, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(2, 0, 1, 1));
      });

      it('should not move in X axis to other rect if this is outside on bottom', () => {
        const r1 = Rectangle.create(2, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(2, 4, 1, 1));
      });

      it('should move in X axis to other rect if this is outside to the top left', () => {
        const r1 = Rectangle.create(0, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(1, 0, 1, 1));
      });

      it('should move in X axis to other rect if this is outside to the top right', () => {
        const r1 = Rectangle.create(4, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(3, 0, 1, 1));
      });

      it('should move in X axis to other rect if this is outside to the bottom left', () => {
        const r1 = Rectangle.create(0, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(1, 4, 1, 1));
      });

      it('should move in X axis to other rect if this is outside to the bottom right', () => {
        const r1 = Rectangle.create(4, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(3, 4, 1, 1));
      });

      it('should not move to other rect if this is inside other rect not touching its edges', () => {
        const r1 = Rectangle.create(2, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(2, 2, 1, 1));
      });

      it('should not move to other rect if this is inside other rect touching its edges', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateXInside(r2)).toEqual(Rectangle.create(1, 1, 2, 2));
      });

      it('should return this', () => {
        const r1 = Rectangle.create(1, 1, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);
        expect(r1.translateXInside(r2)).toBe(r1);
      });
    });

    describe('.translateYInside()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.translateYInside).toEqual(jasmine.any(Function));
      });

      it('should not move in Y axis to other rect if this is outside to the left', () => {
        const r1 = Rectangle.create(0, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(0, 2, 1, 1));
      });

      it('should not move in Y axis to other rect if this is outside to the right', () => {
        const r1 = Rectangle.create(4, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(4, 2, 1, 1));
      });

      it('should move in Y axis to other rect if this is outside on top', () => {
        const r1 = Rectangle.create(2, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(2, 1, 1, 1));
      });

      it('should move in Y axis to other rect if this is outside on bottom', () => {
        const r1 = Rectangle.create(2, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(2, 3, 1, 1));
      });

      it('should move in Y axis to other rect if this is outside to the top left', () => {
        const r1 = Rectangle.create(0, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(0, 1, 1, 1));
      });

      it('should move in Y axis to other rect if this is outside to the top right', () => {
        const r1 = Rectangle.create(4, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(4, 1, 1, 1));
      });

      it('should move in Y axis to other rect if this is outside to the bottom left', () => {
        const r1 = Rectangle.create(0, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(0, 3, 1, 1));
      });

      it('should move in Y axis to other rect if this is outside to the bottom right', () => {
        const r1 = Rectangle.create(4, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(4, 3, 1, 1));
      });

      it('should not move to other rect if this is inside other rect not touching its edges', () => {
        const r1 = Rectangle.create(2, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(2, 2, 1, 1));
      });

      it('should not move to other rect if this is inside other rect touching its edges', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateYInside(r2)).toEqual(Rectangle.create(1, 1, 2, 2));
      });

      it('should return this', () => {
        const r1 = Rectangle.create(1, 1, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);
        expect(r1.translateYInside(r2)).toBe(r1);
      });
    });

    describe('.blend()', () => {
      let r1: Rectangle;
      let r2: Rectangle;

      beforeEach(() => {
        r1 = Rectangle.create(1, 1, 2, 4);
        r2 = Rectangle.create(5, 4, 3, 2);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.blend).toEqual(jasmine.any(Function));
      });

      it('should return this rect for scalar equal to 0', () => {
        expect(r1.blend(r2, 0)).toEqual(Rectangle.create(1, 1, 2, 4));
      });

      it('should return other rect for scalar equal to 1', () => {
        expect(r1.blend(r2, 1)).toEqual(Rectangle.create(5, 4, 3, 2));
      });

      it('should return intermediary rect for scalar between 0 and 1', () => {
        expect(r1.blend(r2, 0.5)).toEqual(Rectangle.create(3, 2.5, 2.5, 3));
      });

      it('should return new instance', () => {
        const rt1 = Rectangle.create(1, 1, 1, 1);
        const rt2 = Rectangle.create(1, 1, 3, 3);

        expect(rt1.blend(rt2, 0.5)).not.toBe(rt1);
      });
    });

    describe('.inflate()', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(3, 4, 3, 2);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.inflate).toEqual(jasmine.any(Function));
      });

      it('should grow in X keeping center point', () => {
        expect(r.inflate(2, 1)).toEqual(Rectangle.create(1.5, 4, 6, 2));
      });

      it('should grow in Y keeping center point', () => {
        expect(r.inflate(1, 2)).toEqual(Rectangle.create(3, 3, 3, 4));
      });

      it('should grow in X & Y keeping center point by providing x and y scale', () => {
        expect(r.inflate(2, 2)).toEqual(Rectangle.create(1.5, 3, 6, 4));
      });

      it('should grow in X & Y keeping center point by providing just x scale', () => {
        expect(r.inflate(2)).toEqual(Rectangle.create(1.5, 3, 6, 4));
      });

      it('should return this', () => {
        expect(r.inflate(2)).toBe(r);
      });
    });

    describe('.expandToIntegers()', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.fromBounds(1.1, 2.1, 3.1, 4.1);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.expandToIntegers).toEqual(jasmine.any(Function));
      });

      it('should expand to smallest rect containing original rectangle, all dimensions as integers', () => {
        expect(r.expandToIntegers()).toEqual(Rectangle.fromBounds(1, 2, 4, 5));
      });

      it('should return this', () => {
        expect(r.expandToIntegers()).toBe(r);
      });
    });

    describe('.relativeTo()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.relativeTo).toEqual(jasmine.any(Function));
      });

      it('should return rectangle with relative position to parent rect', () => {
        const parent = Rectangle.create(2, 3, 5, 6);
        const r = Rectangle.create(4, 4, 3, 2);

        expect(r.relativeTo(parent)).toEqual(Rectangle.create(2, 1, 3, 2));
      });

      it('should return new instance', () => {
        const parent = Rectangle.create(2, 3, 5, 6);
        const r = Rectangle.create(4, 4, 3, 2);

        expect(r.relativeTo(parent)).not.toBe(r);
      });
    });

    describe('.equals()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.equals).toEqual(jasmine.any(Function));
      });

      it('should return true for equal objects', () => {
        const r1 = Rectangle.create(1, 2, 3, 4);
        const r2 = Rectangle.create(1, 2, 3, 4);

        expect(r1.equals(r2)).toBe(true);
      });

      it('should return false for not equal objects', () => {
        const r1 = Rectangle.create(1, 2, 3, 4);
        const r2 = Rectangle.create(2, 3, 4, 5);

        expect(r1.equals(r2)).toBe(false);
      });

      it('should return true for empty objects', () => {
        const r1 = Rectangle.create(1, 2, 0, 4);
        const r2 = Rectangle.create(5, 3, 5, 0);

        expect(r1.equals(r2)).toBe(true);
      });
    });

    describe('.toString()', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.toString).toEqual(jasmine.any(Function));
      });

      it('should properly format output', () => {
        expect(r.toString()).toEqual('(1, 2, 3, 4)');
      });
    });
  });

});

class RectsGenerator {
  public static makeEntry(
    relationName: string,
    r2: Rectangle,
    isIntersect: boolean,
    isContain: boolean,
    intersectRect: Rectangle): RectsEntry {
    return {
      relationName,
      r1: Rectangle.create(1, 1, 3, 3),
      r2, isIntersect,
      isContain,
      intersectRect
    };
  }

  public static testRects(): [RectsEntry] {
    return [
      // intersecting, containing
      this.makeEntry(
        'intersect, contains, including top left', Rectangle.create(1, 1, 1, 1), true, true, Rectangle.create(1, 1, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including top center', Rectangle.create(2, 1, 1, 1), true, true, Rectangle.create(2, 1, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including top right', Rectangle.create(3, 1, 1, 1), true, true, Rectangle.create(3, 1, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including center left', Rectangle.create(1, 2, 1, 1), true, true, Rectangle.create(1, 2, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including center center', Rectangle.create(2, 2, 1, 1), true, true, Rectangle.create(2, 2, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including center right', Rectangle.create(3, 2, 1, 1), true, true, Rectangle.create(3, 2, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including bottom left', Rectangle.create(1, 3, 1, 1), true, true, Rectangle.create(1, 3, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including bottom center', Rectangle.create(2, 3, 1, 1), true, true, Rectangle.create(2, 3, 1, 1)
      ),
      this.makeEntry(
        'intersect, contains, including bottom right', Rectangle.create(3, 3, 1, 1), true, true, Rectangle.create(3, 3, 1, 1)
      ),

      this.makeEntry(
        'intersect, contains, including top bottom', Rectangle.create(2, 1, 1, 3), true, true, Rectangle.create(2, 1, 1, 3)
      ),
      this.makeEntry('intersect, contains, including left right', Rectangle.create(1, 2, 3, 1), true, true, Rectangle.create(1, 2, 3, 1)
      ),

      this.makeEntry(
        'intersect, contains, including left top right', Rectangle.create(1, 1, 3, 2), true, true, Rectangle.create(1, 1, 3, 2)
      ),
      this.makeEntry(
        'intersect, contains, including top right bottom', Rectangle.create(2, 1, 2, 3), true, true, Rectangle.create(2, 1, 2, 3)
      ),
      this.makeEntry(
        'intersect, contains, including right bottom left', Rectangle.create(1, 2, 3, 2), true, true, Rectangle.create(1, 2, 3, 2)
      ),
      this.makeEntry(
        'intersect, contains, including bottom left top', Rectangle.create(1, 1, 2, 3), true, true, Rectangle.create(1, 1, 2, 3)
      ),

      this.makeEntry(
        'intersect, contains, including left top right bottom', Rectangle.create(1, 1, 3, 3), true, true, Rectangle.create(1, 1, 3, 3)
      ),

      // intersecting, not containing
      this.makeEntry(
        'intersect, not contains, including top', Rectangle.create(2, 0, 1, 2), true, false, Rectangle.create(2, 1, 1, 1)
      ),
      this.makeEntry(
        'intersect, not contains, including right', Rectangle.create(3, 2, 2, 1), true, false, Rectangle.create(3, 2, 1, 1)
      ),
      this.makeEntry(
        'intersect, not contains, including left', Rectangle.create(0, 2, 2, 1), true, false, Rectangle.create(1, 2, 1, 1)
      ),
      this.makeEntry(
        'intersect, not contains, including bottom', Rectangle.create(2, 3, 1, 2), true, false, Rectangle.create(2, 3, 1, 1)
      ),

      this.makeEntry(
        'intersect, not contains, including top left', Rectangle.create(0, 0, 2, 2), true, false, Rectangle.create(1, 1, 1, 1)
      ),
      this.makeEntry(
        'intersect, not contains, including top right', Rectangle.create(3, 0, 2, 2), true, false, Rectangle.create(3, 1, 1, 1)
      ),
      this.makeEntry(
        'intersect, not contains, including bottom left', Rectangle.create(0, 3, 2, 2), true, false, Rectangle.create(1, 3, 1, 1)
      ),
      this.makeEntry(
        'intersect, not contains, including bottom right', Rectangle.create(3, 3, 2, 2), true, false, Rectangle.create(3, 3, 1, 1)
      ),
      this.makeEntry(
        'intersect, not contains, including top bottom', Rectangle.create(2, 0, 1, 5), true, false, Rectangle.create(2, 1, 1, 3)
      ),
      this.makeEntry(
        'intersect, not contains, including left right', Rectangle.create(0, 2, 5, 1), true, false, Rectangle.create(1, 2, 3, 1)
      ),

      this.makeEntry(
        'intersect, not contains, including left top right', Rectangle.create(0, 0, 5, 3), true, false, Rectangle.create(1, 1, 3, 2)
      ),
      this.makeEntry(
        'intersect, not contains, including top right bottom', Rectangle.create(2, 0, 3, 5), true, false, Rectangle.create(2, 1, 2, 3)
      ),
      this.makeEntry(
        'intersect, not contains, including right bottom left', Rectangle.create(0, 2, 5, 3), true, false, Rectangle.create(1, 2, 3, 2)
      ),
      this.makeEntry(
        'intersect, not contains, including bottom left top', Rectangle.create(0, 0, 3, 5), true, false, Rectangle.create(1, 1, 2, 3)
      ),

      this.makeEntry(
        'intersect, not contains, including left top right bottom', Rectangle.create(0, 0, 5, 5), true, false, Rectangle.create(1, 1, 3, 3)
      ),

      // not intersecting at all
      this.makeEntry(
        'not intersect, placed on the left', Rectangle.create(0, 2, 1, 1), false, false, Rectangle.empty()
      ),
      this.makeEntry(
        'not intersect, placed on the top', Rectangle.create(2, 0, 1, 1), false, false, Rectangle.empty()
      ),
      this.makeEntry(
        'not intersect, placed on the right', Rectangle.create(4, 2, 1, 1), false, false, Rectangle.empty()
      ),
      this.makeEntry(
        'not intersect, placed on the bottom', Rectangle.create(2, 4, 1, 1), false, false, Rectangle.empty()
      ),

      this.makeEntry(
        'not intersect, placed on the top left', Rectangle.create(0, 0, 1, 1), false, false, Rectangle.empty()
      ),
      this.makeEntry(
        'not intersect, placed on the top right', Rectangle.create(4, 0, 1, 1), false, false, Rectangle.empty()
      ),
      this.makeEntry(
        'not intersect, placed on the bottom left', Rectangle.create(0, 4, 1, 1), false, false, Rectangle.empty()
      ),
      this.makeEntry(
        'not intersect, placed on the bottom right', Rectangle.create(4, 4, 1, 1), false, false, Rectangle.empty()
      ),
    ];
  }
}
