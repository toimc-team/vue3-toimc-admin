export interface HTMLExpandElement extends HTMLElement {
  _parent?: (Node & ParentNode & HTMLElement) | null
  _initialStyle: {
    transition: string
    overflow: string | null
    height?: string | null
    width?: string | null
  }
}

export type Mode = 'in-out' | 'out-in' | 'default' | undefined

export type TransitionList =
  | 'Fade'
  | 'Scale'
  | 'SlideY'
  | 'ScrollY'
  | 'SlideYReverse'
  | 'ScrollYReverse'
  | 'SlideX'
  | 'ScrollX'
  | 'SlideXReverse'
  | 'ScrollXReverse'
  | 'ScaleRotate'
  | 'ExpandX'
  | 'Expand'
