import { Rectangle } from './../../model/rectangle';
import { RectangleFactory } from './../../factory/rectangle-factory';
import { PlacementStrategy, PlacementOptions } from './strategies/placement.strategy';

export class PositionService {
  constructor(private placementStrategies: Array<PlacementStrategy> = []) { }

  position(anchor: Rectangle, element: Rectangle, options?: PlacementOptions): Rectangle {
    const effectiveOptions: PlacementOptions = {
      placementId: 'bottom',
      parent: RectangleFactory.fromWindow(),
      offset: 0,
      constrainToParent: true,
      flip: true,
      ...options
    }

    const placementStrategy: PlacementStrategy = this.pickPlacementStrategy(
      this.placementStrategies,
      effectiveOptions.placementId
    );

    if (!placementStrategy) {
      throw new Error('Placement not supported: ' + effectiveOptions.placementId);
    }

    const placedRectangle: Rectangle = placementStrategy.calculate(
      anchor,
      element,
      effectiveOptions
    );

    return placedRectangle;
  }

  pickPlacementStrategy(
    placementStrategies: Array<PlacementStrategy>,
    placementId: string): PlacementStrategy {

    return placementStrategies.find(
      strategy => strategy.getId() === placementId
    );
  }
}
