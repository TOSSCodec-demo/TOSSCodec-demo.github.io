(function () {
  const data = window.tossCodecDemoData;

  function createAudio(src, label) {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "none";
    audio.src = src;
    audio.setAttribute("aria-label", label);
    return audio;
  }

  function createTag(tag) {
    const span = document.createElement("span");
    span.className = "sample-tag";
    span.textContent = tag;
    return span;
  }

  function renderAudioTable(container, section) {
    const table = document.createElement("table");
    table.className = "audio-table";

    const caption = document.createElement("caption");
    caption.textContent = section.caption;
    table.appendChild(caption);

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const sampleHeader = document.createElement("th");
    sampleHeader.scope = "col";
    sampleHeader.textContent = "Sample";
    headerRow.appendChild(sampleHeader);

    section.columns.forEach((column) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = column.label;
      if (column.highlight) th.classList.add("ours-column");
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    section.samples.forEach((sample, index) => {
      const row = document.createElement("tr");
      const sampleCell = document.createElement("th");
      sampleCell.scope = "row";

      const sampleTitle = document.createElement("strong");
      sampleTitle.textContent = `${index + 1}. ${sample.id}`;
      const sampleText = document.createElement("p");
      sampleText.textContent = sample.text;
      const tagWrap = document.createElement("div");
      tagWrap.className = "sample-tags";
      sample.tags.forEach((tag) => tagWrap.appendChild(createTag(tag)));

      sampleCell.append(sampleTitle, sampleText, tagWrap);
      row.appendChild(sampleCell);

      section.columns.forEach((column) => {
        const td = document.createElement("td");
        if (column.highlight) td.classList.add("ours-column");
        td.appendChild(createAudio(sample.audio[column.key], `${sample.id} ${column.label}`));
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
  }

  document.querySelectorAll("[data-demo-section]").forEach((container) => {
    const key = container.getAttribute("data-demo-section");
    if (!data[key]) return;
    renderAudioTable(container, data[key]);
  });
})();
