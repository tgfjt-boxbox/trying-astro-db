import { defineTable, defineDb, column, NOW } from 'astro:db';

const Post = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    description: column.text({ optional: true }),
    category: column.text({ optional: true }),
    mainImage: column.text({ optional: true }),
    created: column.date({ default: NOW }),
    updated: column.date({ default: NOW }),
    published: column.date({ optional: true }),
    metadata: column.json({ optional: true}),
    indexes: {
      title_idx: { on: ['title'], unique: true },
    }
  }
});

export default defineDb({
  tables: { Post },
});
