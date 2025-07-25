import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import './ProductCategory.css'

const categories = [
  { key: 'all_collection', label: 'All Collection' },
  { key: 'protein_wafer', label: 'Protein Wafer' },
  { key: 'protein_chips', label: 'Protein Chips' },
]

const ProductCategory = ({ isActive, setActive }) => {
  return (
    <motion.div
      className="product_category"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Category Buttons */}
      <div className="cat_btn">
        {categories.map((cat, i) => (
          <motion.button
            key={cat.key}
            className={`category_button ${isActive === cat.key ? 'active' : ''}`}
            onClick={() => setActive(cat.key)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            {cat.label}
            {isActive === cat.key && (
              <motion.div
                className="underline"
                layoutId="active_underline"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Search Input */}
      <motion.div
        className="search_input_box"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Search Products Here"
          className="search_input"
        />
        <Search stroke="white" className="search_icon" />
      </motion.div>
    </motion.div>
  )
}

export default ProductCategory
