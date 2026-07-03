import React from 'react'
import { Button, Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material'
import { priceRanges } from '../../../data/Filter/price'
import { brands }      from '../../../data/Filter/brand'
import { discounts }   from '../../../data/Filter/discount'

//  Types 
export interface FilterState {
  prices:    number[]   // price range ids
  brands:    number[]   // brand ids
  discounts: number[]   // discount ids
}

interface Props {
  filters:    FilterState
  onChange:   (next: FilterState) => void
  onClearAll: () => void
}

// Helper: toggle item in id-array 
function toggle(arr: number[], id: number): number[] {
  return arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]
}

// Sub-section
const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div>
    <p className='font-semibold text-gray-700 px-9 mb-2'>{title}</p>
    <FormGroup className='px-9'>{children}</FormGroup>
    <Divider className='mt-3' />
  </div>
)

//Main component 
const FilterSection = ({ filters, onChange, onClearAll }: Props) => {
  const totalActive =
    filters.prices.length + filters.brands.length + filters.discounts.length

  return (
    <div className='space-y-4 bg-white'>
      {/* Header */}
      <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>
        <p className='text-lg font-semibold'>
          Filters
          {totalActive > 0 && (
            <span className='ml-2 text-xs font-bold bg-primary-color text-white rounded-full px-2 py-0.5'>
              {totalActive}
            </span>
          )}
        </p>
        <Button
          size='small'
          onClick={onClearAll}
          disabled={totalActive === 0}
          className='text-red-600 cursor-pointer font-semibold'
          sx={{ color: 'red', '&.Mui-disabled': { color: '#ccc' } }}
        >
          Clear All
        </Button>
      </div>

      <Divider />

      {/* Price  */}
      <Section title='Price (VND)'>
        {priceRanges.map((range) => (
          <FormControlLabel
            key={range.id}
            label={<span className='text-sm text-gray-600'>{range.label}</span>}
            control={
              <Checkbox
                size='small'
                checked={filters.prices.includes(range.id)}
                onChange={() =>
                  onChange({ ...filters, prices: toggle(filters.prices, range.id) })
                }
              />
            }
          />
        ))}
      </Section>

      {/* Brand*/}
      <Section title='Brand'>
        {brands.map((brand) => (
          <FormControlLabel
            key={brand.id}
            label={<span className='text-sm text-gray-600'>{brand.label}</span>}
            control={
              <Checkbox
                size='small'
                checked={filters.brands.includes(brand.id)}
                onChange={() =>
                  onChange({ ...filters, brands: toggle(filters.brands, brand.id) })
                }
              />
            }
          />
        ))}
      </Section>

      {/* ── Discount ──────────────────────────────────────────── */}
      <Section title='Discount'>
        {discounts.map((d) => (
          <FormControlLabel
            key={d.id}
            label={<span className='text-sm text-gray-600'>{d.label}</span>}
            control={
              <Checkbox
                size='small'
                checked={filters.discounts.includes(d.id)}
                onChange={() =>
                  onChange({ ...filters, discounts: toggle(filters.discounts, d.id) })
                }
              />
            }
          />
        ))}
      </Section>
    </div>
  )
}

export default FilterSection