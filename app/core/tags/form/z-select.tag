<z-select>
  <div class="dropdown icon">
    <select onchange={opts.handler} value={opts.selected}>
      <option each={option in opts.options} value="{option.id}">{option.text}</option>
    </select>
  </div>
</z-select>
