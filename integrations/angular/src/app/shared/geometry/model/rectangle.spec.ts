import { Point } from './point';
import { Rectangle } from './rectangle';

type RectsEntry = {
  relationName: string,
  r1: Rectangle,
  r2: Rectangle,
  isIntersect: boolean,
  isContain: boolean,
  intersectRect: Rectangle
};

fdescribe('Rectangle', () => {
  describe('Api', () => {
    describe('Rectangle.create', () => {
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
      let src = Rectangle.create(1, 2, 3, 5);
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
      let r: Rectangle;
      let rMvd: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rMvd = r.moveTo(12, 7);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.moveTo).toEqual(jasmine.any(Function));
      });

      it('should translate coordinates', () => {
        expect(rMvd).toEqual(Rectangle.create(12, 7, 3, 4));
      });

      it('should return this', () => {
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

    describe('.center()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.center).toEqual(jasmine.any(Function));
      });

      it('should return center point of rectangle', () => {
        const r = Rectangle.create(1, 1, 4, 6);

        expect(r.center()).toEqual(Point.create(3, 4));
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
          if(r === r2) {
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

    describe('.contains()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.contains).toEqual(jasmine.any(Function));
      });

      it('should return false if this is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.empty();

        expect(empty.contains(r)).toBe(false);
      });

      it('should return true if other is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.empty();

        expect(r.contains(empty)).toBe(true);
      });

      it('return true if fully contains other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => entry.isIntersect)
          .filter(entry => entry.isContain)
          .forEach((entry) => {
            expect(entry.r1.contains(entry.r2)).toBe(true, entry.relationName);
          });
      });

      it('return false if intersects other rect but does not fully contain', () => {
        RectsGenerator.testRects()
          .filter(entry => entry.isIntersect)
          .filter(entry => !entry.isContain)
          .forEach((entry) => {
            expect(entry.r1.contains(entry.r2)).toBe(false, entry.relationName);
          });
      });

      it('return false if does not contain other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => !entry.isIntersect)
          .forEach((entry) => {
            expect(entry.r1.contains(entry.r2)).toBe(false, entry.relationName);
          });
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

      it('return true if intersects other rect', () => {
        RectsGenerator.testRects()
          .filter(entry => entry.isIntersect)
          .forEach((entry) => {
            expect(entry.r1.intersects(entry.r2)).toBe(true, entry.relationName);
          });
      });

      it('return false if does not intersect other rect', () => {
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
          if(r === r2) {
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

    describe('.restrictTo()', () => {
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

        expect(result).toEqual(other)
      });

      it('should return this if other is empty', () => {
        const empty = Rectangle.empty();
        const other = Rectangle.create(1, 2, 3, 4);
        const result = other.expandToContain(empty);

        expect(result).toEqual(other)
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

        expect(result).toBe(r1)
      });

    });

    describe('.translateInside()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.translateInside).toEqual(jasmine.any(Function));
      });

      it('should move to other rect if this is outside to the left', () => {
        const r1 = Rectangle.create(0, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(1, 2, 1, 1));
      });

      it('should move to other rect if this is outside to the right', () => {
        const r1 = Rectangle.create(4, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(3, 2, 1, 1));
      });

      it('should move to other rect if this is outside on top', () => {
        const r1 = Rectangle.create(2, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(2, 1, 1, 1));
      });

      it('should move to other rect if this is outside on bottom', () => {
        const r1 = Rectangle.create(2, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(2, 3, 1, 1));
      });

      it('should move to other rect if this is outside to the top left', () => {
        const r1 = Rectangle.create(0, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(1, 1, 1, 1));
      });

      it('should move to other rect if this is outside to the top right', () => {
        const r1 = Rectangle.create(4, 0, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(3, 1, 1, 1));
      });

      it('should move to other rect if this is outside to the bottom left', () => {
        const r1 = Rectangle.create(0, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(1, 3, 1, 1));
      });

      it('should move to other rect if this is outside to the bottom right', () => {
        const r1 = Rectangle.create(4, 4, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(3, 3, 1, 1));
      });

      it('should not move to other rect if this is inside other rect not touching its edges', () => {
        const r1 = Rectangle.create(2, 2, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(2, 2, 1, 1));
      });

      it('should not move to other rect if this is inside other rect touching its edges', () => {
        const r1 = Rectangle.create(1, 1, 2, 2);
        const r2 = Rectangle.create(1, 1, 3, 3);

        expect(r1.translateInside(r2)).toEqual(Rectangle.create(1, 1, 2, 2));
      });

      it('should return this', () => {
        const r1 = Rectangle.create(1, 1, 1, 1);
        const r2 = Rectangle.create(1, 1, 3, 3);
        expect(r1.translateInside(r2)).toBe(r1);
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
  public static makeEntry(relationName: string, r2: Rectangle, isIntersect: boolean, isContain: boolean, intersectRect: Rectangle): RectsEntry {
    return { relationName, r1: Rectangle.create(1, 1, 3, 3), r2, isIntersect, isContain, intersectRect }
  }

  public static testRects(): [RectsEntry] {
    return [
      // intersecting, containing
      this.makeEntry('intersect, contains, including top left', Rectangle.create(1, 1, 1, 1), true, true, Rectangle.create(1, 1, 1, 1)),
      this.makeEntry('intersect, contains, including top center', Rectangle.create(2, 1, 1, 1), true, true, Rectangle.create(2, 1, 1, 1)),
      this.makeEntry('intersect, contains, including top right', Rectangle.create(3, 1, 1, 1), true, true, Rectangle.create(3, 1, 1, 1)),
      this.makeEntry('intersect, contains, including center left', Rectangle.create(1, 2, 1, 1), true, true, Rectangle.create(1, 2, 1, 1)),
      this.makeEntry('intersect, contains, including center center', Rectangle.create(2, 2, 1, 1), true, true, Rectangle.create(2, 2, 1, 1)),
      this.makeEntry('intersect, contains, including center right', Rectangle.create(3, 2, 1, 1), true, true, Rectangle.create(3, 2, 1, 1)),
      this.makeEntry('intersect, contains, including bottom left', Rectangle.create(1, 3, 1, 1), true, true, Rectangle.create(1, 3, 1, 1)),
      this.makeEntry('intersect, contains, including bottom center', Rectangle.create(2, 3, 1, 1), true, true, Rectangle.create(2, 3, 1, 1)),
      this.makeEntry('intersect, contains, including bottom right', Rectangle.create(3, 3, 1, 1), true, true, Rectangle.create(3, 3, 1, 1)),

      this.makeEntry('intersect, contains, including top bottom', Rectangle.create(2, 1, 1, 3), true, true, Rectangle.create(2, 1, 1, 3)),
      this.makeEntry('intersect, contains, including left right', Rectangle.create(1, 2, 3, 1), true, true, Rectangle.create(1, 2, 3, 1)),

      this.makeEntry('intersect, contains, including left top right', Rectangle.create(1, 1, 3, 2), true, true, Rectangle.create(1, 1, 3, 2)),
      this.makeEntry('intersect, contains, including top right bottom', Rectangle.create(2, 1, 2, 3), true, true, Rectangle.create(2, 1, 2, 3)),
      this.makeEntry('intersect, contains, including right bottom left', Rectangle.create(1, 2, 3, 2), true, true, Rectangle.create(1, 2, 3, 2)),
      this.makeEntry('intersect, contains, including bottom left top', Rectangle.create(1, 1, 2, 3), true, true, Rectangle.create(1, 1, 2, 3)),

      this.makeEntry('intersect, contains, including left top right bottom', Rectangle.create(1, 1, 3, 3), true, true, Rectangle.create(1, 1, 3, 3)),

      // intersecting, not containing
      this.makeEntry('intersect, not contains, including top', Rectangle.create(2, 0, 1, 2), true, false, Rectangle.create(2, 1, 1, 1)),
      this.makeEntry('intersect, not contains, including right', Rectangle.create(3, 2, 2, 1), true, false, Rectangle.create(3, 2, 1, 1)),
      this.makeEntry('intersect, not contains, including left', Rectangle.create(0, 2, 2, 1), true, false, Rectangle.create(1, 2, 1, 1)),
      this.makeEntry('intersect, not contains, including bottom', Rectangle.create(2, 3, 1, 2), true, false, Rectangle.create(2, 3, 1, 1)),

      this.makeEntry('intersect, not contains, including top left', Rectangle.create(0, 0, 2, 2), true, false, Rectangle.create(1, 1, 1, 1)),
      this.makeEntry('intersect, not contains, including top right', Rectangle.create(3, 0, 2, 2), true, false, Rectangle.create(3, 1, 1, 1)),
      this.makeEntry('intersect, not contains, including bottom left', Rectangle.create(0, 3, 2, 2), true, false, Rectangle.create(1, 3, 1, 1)),
      this.makeEntry('intersect, not contains, including bottom right', Rectangle.create(3, 3, 2, 2), true, false, Rectangle.create(3, 3, 1, 1)),
      this.makeEntry('intersect, not contains, including top bottom', Rectangle.create(2, 0, 1, 5), true, false, Rectangle.create(2, 1, 1, 3)),
      this.makeEntry('intersect, not contains, including left right', Rectangle.create(0, 2, 5, 1), true, false, Rectangle.create(1, 2, 3, 1)),

      this.makeEntry('intersect, not contains, including left top right', Rectangle.create(0, 0, 5, 3), true, false, Rectangle.create(1, 1, 3, 2)),
      this.makeEntry('intersect, not contains, including top right bottom', Rectangle.create(2, 0, 3, 5), true, false, Rectangle.create(2, 1, 2, 3)),
      this.makeEntry('intersect, not contains, including right bottom left', Rectangle.create(0, 2, 5, 3), true, false, Rectangle.create(1, 2, 3, 2)),
      this.makeEntry('intersect, not contains, including bottom left top', Rectangle.create(0, 0, 3, 5), true, false, Rectangle.create(1, 1, 2, 3)),

      this.makeEntry('intersect, not contains, including left top right bottom', Rectangle.create(0, 0, 5, 5), true, false, Rectangle.create(1, 1, 3, 3)),

      // not intersecting at all
      this.makeEntry('not intersect, placed on the left', Rectangle.create(0, 2, 1, 1), false, false, Rectangle.empty()),
      this.makeEntry('not intersect, placed on the top', Rectangle.create(2, 0, 1, 1), false, false, Rectangle.empty()),
      this.makeEntry('not intersect, placed on the right', Rectangle.create(4, 2, 1, 1), false, false, Rectangle.empty()),
      this.makeEntry('not intersect, placed on the bottom', Rectangle.create(2, 4, 1, 1), false, false, Rectangle.empty()),

      this.makeEntry('not intersect, placed on the top left', Rectangle.create(0, 0, 1, 1), false, false, Rectangle.empty()),
      this.makeEntry('not intersect, placed on the top right', Rectangle.create(4, 0, 1, 1), false, false, Rectangle.empty()),
      this.makeEntry('not intersect, placed on the bottom left', Rectangle.create(0, 4, 1, 1), false, false, Rectangle.empty()),
      this.makeEntry('not intersect, placed on the bottom right', Rectangle.create(4, 4, 1, 1), false, false, Rectangle.empty()),
    ]
  }
}
