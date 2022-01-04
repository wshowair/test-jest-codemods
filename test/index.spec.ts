import {expect} from 'chai'
import sinon from 'sinon'
import {sum} from '../src'

describe('Sum', () => {
  it('adds', () => {
    expect(sum(3,2)).to.equal(5)
  })
})