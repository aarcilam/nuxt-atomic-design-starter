<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.label }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            <slot name="start" :row="row" :column="column" />
            {{ row[column.field] }}
            <slot name="end" :row="row" :column="column" />
          </td>
          <th>
            <slot name="actions" :row="row">
              <button class="btn btn-ghost btn-xs">details</button>
            </slot>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.label }}
          </th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// Define la estructura de las columnas
interface Column {
  label: string;
  field: string;
}

// Define la estructura de cada fila de datos
interface TableRow {
  [key: string]: any; // Permite campos dinámicos
}

// Props recibidas
const props = defineProps<{
  columns: Column[];
  rows: TableRow[];
}>();

// Accede a las props en el template usando props.columns y props.rows
const { columns, rows } = props;
</script>
