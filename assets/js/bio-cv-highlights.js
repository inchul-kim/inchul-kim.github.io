(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }
    callback();
  }

  function stripJsonComments(input) {
    var output = "";
    var inString = false;
    var quoteChar = "";
    var escaped = false;
    var inLineComment = false;
    var inBlockComment = false;

    for (var i = 0; i < input.length; i += 1) {
      var current = input[i];
      var next = input[i + 1];

      if (inLineComment) {
        if (current === "\n") {
          inLineComment = false;
          output += current;
        }
        continue;
      }

      if (inBlockComment) {
        if (current === "*" && next === "/") {
          inBlockComment = false;
          i += 1;
        } else if (current === "\n") {
          output += current;
        }
        continue;
      }

      if (inString) {
        output += current;
        if (escaped) {
          escaped = false;
          continue;
        }
        if (current === "\\") {
          escaped = true;
          continue;
        }
        if (current === quoteChar) {
          inString = false;
          quoteChar = "";
        }
        continue;
      }

      if (current === "\"" || current === "'") {
        inString = true;
        quoteChar = current;
        output += current;
        continue;
      }

      if (current === "/" && next === "/") {
        inLineComment = true;
        i += 1;
        continue;
      }

      if (current === "/" && next === "*") {
        inBlockComment = true;
        i += 1;
        continue;
      }

      output += current;
    }

    return output;
  }

  function normalizeDate(value) {
    if (!value) return "";
    var stringValue = String(value);
    var parts = stringValue.split("-");
    if (parts.length >= 2 && parts[0].length === 4) {
      return parts[0] + "." + parts[1];
    }
    return stringValue;
  }

  function getDateRange(startDate, endDate, usePresent) {
    var start = normalizeDate(startDate);
    var end = normalizeDate(endDate);

    if (start && end) return start + " - " + end;
    if (start && !end && usePresent) return start + " - Present";
    return start || end || "";
  }

  function toArray(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [value];
  }

  function sortByDateDescending(items, key) {
    return items.slice().sort(function (a, b) {
      var left = (a[key] || "").toString();
      var right = (b[key] || "").toString();
      return right.localeCompare(left);
    });
  }

  function createSection(title) {
    var section = document.createElement("section");
    section.className = "mt-4";

    var heading = document.createElement("h3");
    heading.className = "font-weight-medium";
    heading.textContent = title;
    section.appendChild(heading);

    return section;
  }

  function createTextLine(className, text, allowHtml) {
    if (!text) return null;
    var line = document.createElement("h6");
    line.className = className;
    line.style.fontSize = "0.95rem";
    if (allowHtml) {
      line.innerHTML = text;
    } else {
      line.textContent = text;
    }
    return line;
  }

  function makeLinkedOrText(tagName, className, text, url, allowHtml) {
    if (!text) return null;
    var element = document.createElement(tagName);
    element.className = className;
    if (url) {
      var link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      if (allowHtml) {
        link.innerHTML = text;
      } else {
        link.textContent = text;
      }
      element.appendChild(link);
      return element;
    }
    if (allowHtml) {
      element.innerHTML = text;
    } else {
      element.textContent = text;
    }
    return element;
  }

  function createHighlightsList(highlights, allowHtml) {
    var items = toArray(highlights);
    if (!items.length) return null;

    var list = document.createElement("ul");
    list.className = "items";
    list.style.listStyle = "none";

    items.forEach(function (item) {
      if (!item) return;
      var listItem = document.createElement("li");
      var span = document.createElement("span");
      span.className = "item";
      if (allowHtml) {
        span.innerHTML = "&mdash; " + item;
      } else {
        span.textContent = "- " + item;
      }
      listItem.appendChild(span);
      list.appendChild(listItem);
    });

    return list;
  }

  function createTimelineList(entries, mapper) {
    var list = document.createElement("ul");
    list.className = "card-text font-weight-light list-group list-group-flush";

    entries.forEach(function (entry) {
      var mapped = mapper(entry);
      if (!mapped) return;

      var listItem = document.createElement("li");
      listItem.className = "list-group-item";

      var row = document.createElement("div");
      row.className = "row";

      var dateColumn = document.createElement("div");
      dateColumn.className = "col-xs-12 col-sm-3 col-md-2 text-center date-column";

      if (mapped.date) {
        var badge = document.createElement("span");
        badge.className = "badge font-weight-bold danger-color-dark text-uppercase align-middle";
        badge.style.minWidth = "75px";
        badge.textContent = mapped.date;
        dateColumn.appendChild(badge);
      }

      if (mapped.location) {
        var location = document.createElement("p");
        location.className = "location";
        location.innerHTML = "<i class=\"fa-solid fa-location-dot iconlocation\"></i> " + mapped.location;
        dateColumn.appendChild(location);
      }

      var contentColumn = document.createElement("div");
      contentColumn.className = "col-xs-12 col-sm-9 col-md-10 mt-2 mt-md-0";

      var title = makeLinkedOrText("h6", "title font-weight-bold ml-1 ml-md-4", mapped.title, mapped.url, false);
      if (title) contentColumn.appendChild(title);

      var subtitle = makeLinkedOrText("h6", "ml-1 ml-md-4", mapped.subtitle, mapped.subtitleUrl, false);
      if (subtitle) contentColumn.appendChild(subtitle);

      var summary = createTextLine("ml-1 ml-md-4", mapped.summary, true);
      if (summary) {
        summary.style.fontStyle = "italic";
        contentColumn.appendChild(summary);
      }

      var highlights = createHighlightsList(mapped.highlights, true);
      if (highlights) contentColumn.appendChild(highlights);

      row.appendChild(dateColumn);
      row.appendChild(contentColumn);
      listItem.appendChild(row);
      list.appendChild(listItem);
    });

    return list;
  }

  function addTimelineCard(root, title, entries, mapper) {
    if (!entries || !entries.length) return;
    var section = createSection(title);
    section.appendChild(createTimelineList(entries, mapper));
    root.appendChild(section);
  }

  onReady(function () {
    var container = document.getElementById("bio-cv-highlights");
    if (!container) return;

    var source = container.getAttribute("data-cv-source");
    if (!source) return;

    fetch(source, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load CV JSON (" + response.status + ")");
        }
        return response.text();
      })
      .then(function (rawText) {
        var parsed = JSON.parse(stripJsonComments(rawText));

        container.innerHTML = "";
        var appointments = sortByDateDescending(toArray(parsed.appointments), "startDate");
        addTimelineCard(container, "Appointments", appointments, function (item) {
          return {
            title: item.position || item.name || "",
            subtitle: item.name || "",
            subtitleUrl: item.url || null,
            summary: "",
            highlights: item.highlights || [],
            date: getDateRange(item.startDate, item.endDate, true),
            location: item.location || "",
          };
        });

        var education = sortByDateDescending(toArray(parsed.education), "startDate");
        addTimelineCard(container, "Education", education, function (item) {
          return {
            title: item.studyType || item.area || "",
            subtitle: item.institution || "",
            subtitleUrl: item.url || null,
            summary: item.area || "",
            highlights: item.courses || [],
            date: getDateRange(item.startDate, item.endDate, true),
            location: item.location || "",
          };
        });

        var projects = sortByDateDescending(toArray(parsed.projects), "startDate");
        addTimelineCard(container, "Projects", projects, function (item) {
          return {
            title: item.name || "",
            url: item.url || null,
            subtitle: item.institution || "",
            summary: "",
            highlights: item.highlights || [],
            date: getDateRange(item.startDate, item.endDate, false),
            location: item.location || "",
          };
        });

        var awards = sortByDateDescending(toArray(parsed.awards), "date");
        addTimelineCard(container, "Honors and Awards", awards, function (item) {
          return {
            title: item.title || "",
            url: item.url || null,
            subtitle: item.awarder || "",
            summary: "",
            highlights: item.highlights || item.summary || [],
            date: normalizeDate(item.date),
            location: "",
          };
        });
      })
      .catch(function (error) {
        container.innerHTML = "";
        var section = createSection("CV Highlights");
        var message = document.createElement("p");
        message.className = "mb-0";
        message.textContent = "Could not load CV highlights from assets/json/cv.json.";
        section.appendChild(message);

        var details = document.createElement("small");
        details.className = "text-muted";
        details.textContent = error.message;
        section.appendChild(details);

        container.appendChild(section);
      });
  });
})();
