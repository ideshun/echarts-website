window.__EC_DOC_option_legend = {
  "type": {
    "desc": "<p>Type of legend. Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;plain&#39;</code>: Simple legend. (default)</li>\n<li><code class=\"codespan\">&#39;scroll&#39;</code>: Scrollable legend. It helps when too many legend items needed to be shown.</li>\n</ul>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n<p>When <code class=\"codespan\">&#39;scroll&#39;</code> used, these options below can be used for detailed configuration:</p>\n<ul>\n<li><a href=\"#legend.scrollDataIndex\">legend.scrollDataIndex</a></li>\n<li><a href=\"#legend.pageButtonItemGap\">legend.pageButtonItemGap</a></li>\n<li><a href=\"#legend.pageButtonGap\">legend.pageButtonGap</a></li>\n<li><a href=\"#legend.pageButtonPosition\">legend.pageButtonPosition</a></li>\n<li><a href=\"#legend.pageFormatter\">legend.pageFormatter</a></li>\n<li><a href=\"#legend.pageIcons\">legend.pageIcons</a></li>\n<li><a href=\"#legend.pageIconColor\">legend.pageIconColor</a></li>\n<li><a href=\"#legend.pageIconInactiveColor\">legend.pageIconInactiveColor</a></li>\n<li><a href=\"#legend.pageIconSize\">legend.pageIconSize</a></li>\n<li><a href=\"#legend.pageTextStyle\">legend.pageTextStyle</a></li>\n<li><a href=\"#legend.animation\">legend.animation</a></li>\n<li><a href=\"#legend.animationDurationUpdate\">legend.animationDurationUpdate</a></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "plain,scroll"
    }
  },
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "zlevel": {
    "desc": "<p><code class=\"codespan\">zlevel</code> value of all graphical elements in .</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n"
  },
  "z": {
    "desc": "<p><code class=\"codespan\">z</code> value of all graphical elements in , which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n<p><code class=\"codespan\">z</code> has a lower priority to <code class=\"codespan\">zlevel</code>, and will not create new Canvas.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between legend component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "<p>Distance between legend component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "<p>Distance between legend component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p>Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "<p>Distance between legend component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p>Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "width": {
    "desc": "<p>Width of legend component. Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "height": {
    "desc": "<p>Height of legend component. Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "orient": {
    "desc": "<p>The layout orientation of legend.</p>\n<p>Options:</p>\n<ul>\n<li>&#39;horizontal&#39;</li>\n<li>&#39;vertical&#39;</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "vertical,horizontal",
      "default": "horizontal"
    }
  },
  "align": {
    "desc": "<p>Legend marker and text aligning. By default, it automatically calculates from component location and orientation. When <a href=\"#legend.left\">left</a> value of this component is &#39;right&#39;, and the vertical layout (<a href=\"#legend.orient\">orient</a> is &#39;vertical&#39;), it would be aligned to &#39;right&#39;.</p>\n<p>Option:</p>\n<ul>\n<li>&#39;auto&#39;</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,left,right",
      "default": "auto"
    }
  },
  "padding": {
    "desc": "<p>legend space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples: </p>\n<pre><code class=\"lang-js\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "itemGap": {
    "desc": "<p>The distance between each legend, horizontal distance in horizontal layout, and vertical distance in vertical layout.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "10",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemWidth": {
    "desc": "<p>Image width of legend symbol.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "25",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemHeight": {
    "desc": "<p>Image height of legend symbol.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "0",
      "step": "0.5"
    }
  },
  "symbolKeepAspect": {
    "desc": "<p>Whether to keep aspect for icons (from <code class=\"codespan\">series.symbol</code> or user-defined <code class=\"codespan\">legend.data.icon</code>) in the form of <code class=\"codespan\">path://</code>.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "formatter": {
    "desc": "<p>Formatter is used to format label of legend, which supports string template and callback function.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">// using string template, the template variable is legend name {name}\nformatter: &#39;Legend {name}&#39;\n// using callback function\nformatter: function (name) {\n    return &#39;Legend &#39; + name;\n}\n</code></pre>\n"
  },
  "selectedMode": {
    "desc": "<p>Selected mode of legend, which controls whether series can be toggled displaying by clicking legends. It is enabled by default, and you may set it to be <code class=\"codespan\">false</code> to disable it.</p>\n<p>Besides, it can be set to <code class=\"codespan\">&#39;single&#39;</code> or <code class=\"codespan\">&#39;multiple&#39;</code>, for single selection and multiple selection.</p>\n",
    "uiControl": {
      "type": "boolean",
      "options": "true,false,single,multiple"
    }
  },
  "inactiveColor": {
    "desc": "<p>Legend color when not selected.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#ccc"
    }
  },
  "selected": {
    "desc": "<p>State table of selected legend.</p>\n<p>example:</p>\n<pre><code>selected: {\n    // selected&#39;series 1&#39;\n    &#39;series 1&#39;: true,\n    // unselected&#39;series 2&#39;\n    &#39;series 2&#39;: false\n}\n</code></pre>"
  },
  "textStyle": {
    "desc": "<p>Legend text style.</p>\n"
  },
  "textStyle.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "textStyle.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "textStyle.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "textStyle.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "textStyle.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "textStyle.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "textStyle.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "textStyle.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "textStyle.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "textStyle.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "textStyle.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "textStyle.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "textStyle.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "textStyle.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "textStyle.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textStyle.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "textStyle.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "textStyle.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "textStyle.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "textStyle.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "textStyle.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "textStyle.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "textStyle.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "textStyle.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "textStyle.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "textStyle.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "textStyle.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "textStyle.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "textStyle.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "textStyle.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "textStyle.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textStyle.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip": {
    "desc": "<p>Tooltip configuration for legend tooltip, which is similar to <a href=\"#tooltip\">tooltip</a>.</p>\n"
  },
  "icon": {
    "desc": "<p>Icon of the legend items.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "data": {
    "desc": "<p>Data array of legend. An array item is usually a <code class=\"codespan\">name</code> representing string. (If it is a <a href=\"#series-pie\">pie chart</a>, it could also be the <code class=\"codespan\">name</code> of a single data in the pie chart) of a series. Legend component would automatically calculate the color and icon according to series. Special string <code class=\"codespan\">&#39;&#39;</code> (null string) or <code class=\"codespan\">&#39;\\n&#39;</code> (new line string) can be used for a new line.</p>\n<p>If <code class=\"codespan\">data</code> is not specified, it will be auto collected from series. For most of series, it will be collected from <a href=\"#series.name\">series.name</a> or the dimension name specified by <code class=\"codespan\">seriesName</code> of <a href=\"#series.encode\">series.encode</a>. For some types of series like <a href=\"#series-pie\">pie</a> and <a href=\"#series-funnel\">funnel</a>, it will be collected from the name field of <code class=\"codespan\">series.data</code>.</p>\n<p>If you need to set the style for a single item, you may also set the configuration of it. In this case, <code class=\"codespan\">name</code> attribute is used to represent name of <code class=\"codespan\">series</code>.</p>\n<p>Example:</p>\n<pre><code>data: [{\n    name: &#39;series 1&#39;,\n    // compulsorily set icon as a circle\n    icon: &#39;circle&#39;,\n    // set up the text in red\n    textStyle: {\n        color: &#39;red&#39;\n    }\n}]\n</code></pre>"
  },
  "data.name": {
    "desc": "<p>Name of legend, which should be the <code class=\"codespan\">name</code> value of a certain series. If it is a pie chart, legend name can also be the name of a single data item.</p>\n"
  },
  "data.icon": {
    "desc": "<p>Icon of the legend.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "data.textStyle": {
    "desc": "<p>Text style of legend.</p>\n"
  },
  "backgroundColor": {
    "desc": "<p>Background color of legend, which is transparent by default.</p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>.</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "borderColor": {
    "desc": "<p>Border color of legend. Support the same color format as backgroundColor.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#ccc"
    }
  },
  "borderWidth": {
    "desc": "<p>Border width of legend.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "borderRadius": {
    "desc": "<p>The radius of rounded corner. Its unit is px. And it supports use array to respectively specify the 4 corner radiuses.</p>\n<p>For example:</p>\n<pre><code>borderRadius: 5, // consistently set the size of 4 rounded corners\nborderRadius: [5, 5, 0, 0] // (clockwise upper left, upper right, bottom right and bottom left)\n</code></pre>",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT,RB,LB"
    }
  },
  "shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n<p><strong>Attention</strong>: This property works only if <code class=\"codespan\">show: true</code> is configured and <code class=\"codespan\">backgroundColor</code> is defined other than <code class=\"codespan\">transparent</code>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n<p><strong>Attention</strong>: This property works only if <code class=\"codespan\">show: true</code> configured.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n<p><strong>Attention</strong>: This property works only if <code class=\"codespan\">show: true</code> configured.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n<p><strong>Attention</strong>: This property works only if <code class=\"codespan\">show: true</code> configured.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "scrollDataIndex": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p><code class=\"codespan\">dataIndex</code> of the left top most displayed item.</p>\n<p>Although the scrolling of legend items can be controlled by calling <code class=\"codespan\">setOption</code> and specifying this property, we suggest that do not control legend in this way unless necessary (<code class=\"codespan\">setOption</code> might be time-consuming), but just use action <a href=\"api.html#action.legend.legendScroll\" target=\"_blank\">legendScroll</a> to do that.</p>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n"
  },
  "pageButtonItemGap": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The gap between page buttons and page info text.</p>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n"
  },
  "pageButtonGap": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The gap between page buttons and legend items.</p>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n"
  },
  "pageButtonPosition": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The position of page buttons and page info. Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code>: on the left or top.</li>\n<li><code class=\"codespan\">&#39;end&#39;</code>: on the right or bottom.</li>\n</ul>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n"
  },
  "pageFormatter": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>Page info formatter. It is <code class=\"codespan\">&#39;{current}/{total}&#39;</code> by default, where <code class=\"codespan\">{current}</code> is current page number (start from 1), and <code class=\"codespan\">{total}</code> is the total page number.</p>\n<p>If <code class=\"codespan\">pageFormatter</code> is a function, it should return a string. The parameters is:</p>\n<pre><code class=\"lang-js\">{\n    current: number\n    total: number\n}\n</code></pre>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n"
  },
  "pageIcons": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The icons of page buttons.</p>\n"
  },
  "pageIcons.horizontal": {
    "desc": "<p>The icons of page buttons when <a href=\"#legend.orient\">legend.orient</a> is <code class=\"codespan\">&#39;horizontal&#39;</code>.</p>\n<p>It should be an array, <code class=\"codespan\">[previous page button, next page button]</code>, <code class=\"codespan\">[&#39;M0,0L12,-10L12,10z&#39;, &#39;M0,0L-12,-10L-12,10z&#39;]</code> by default.</p>\n<p>For the each item of the array,</p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n"
  },
  "pageIcons.vertical": {
    "desc": "<p>The icons of page buttons when <a href=\"#legend.orient\">legend.orient</a> is <code class=\"codespan\">&#39;vertical&#39;</code>.</p>\n<p>It should be an array, <code class=\"codespan\">[previous page button, next page button]</code>, <code class=\"codespan\">[&#39;M0,0L20,0L10,-20z&#39;, &#39;M0,0L20,0L10,20z&#39;]</code> by default.</p>\n<p>For the each item of the array,</p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n"
  },
  "pageIconColor": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The color of page buttons.</p>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#2f4554"
    }
  },
  "pageIconInactiveColor": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The color of page buttons when they are inactive.</p>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#aaa"
    }
  },
  "pageIconSize": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The size of page buttons. It can be a number, or an array, like <code class=\"codespan\">[10, 3]</code>, represents <code class=\"codespan\">[width, height]</code>.</p>\n<p>See <a href=\"/examples/zh/editor.html?c=pie-legend&amp;edit=1&amp;reset=1\" target=\"_blank\">vertically scrollable legend</a> or <a href=\"/examples/zh/editor.html?c=radar2&amp;edit=1&amp;reset=1\" target=\"_blank\">horizontally scrollable legend</a>.</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "15,15",
      "dims": "w,h"
    }
  },
  "pageTextStyle": {
    "desc": "<p>It works when <a href=\"#legend.type\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<p>The text style of page info.</p>\n"
  },
  "pageTextStyle.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "pageTextStyle.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "pageTextStyle.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "pageTextStyle.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "pageTextStyle.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "pageTextStyle.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "pageTextStyle.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "pageTextStyle.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "pageTextStyle.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "pageTextStyle.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "pageTextStyle.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "pageTextStyle.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "pageTextStyle.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "pageTextStyle.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "animation": {
    "desc": "<p>Whether to use animation when page scrolls.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "animationDurationUpdate": {
    "desc": "<p>Duration of the page scroll animation.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "800",
      "step": "20"
    }
  },
  "emphasis.selectorLabel": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.4.0</code></p>\n</blockquote>\n"
  },
  "emphasis.selectorLabel.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "emphasis.selectorLabel.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "emphasis.selectorLabel.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "emphasis.selectorLabel.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "emphasis.selectorLabel.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "emphasis.selectorLabel.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "emphasis.selectorLabel.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "emphasis.selectorLabel.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "emphasis.selectorLabel.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "emphasis.selectorLabel.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "emphasis.selectorLabel.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "emphasis.selectorLabel.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.selectorLabel.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.selectorLabel.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "emphasis.selectorLabel.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "emphasis.selectorLabel.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.selectorLabel.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.selectorLabel.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.selectorLabel.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.selectorLabel.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "emphasis.selectorLabel.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "emphasis.selectorLabel.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.selectorLabel.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.selectorLabel.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.selectorLabel.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selector": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.4.0</code></p>\n</blockquote>\n<p>The selector button in the legend component. Currently includes both a full selection and an inverse selection. The selector button doesn&#39;t display by default, the user can manually configure it.</p>\n<p>Usage:</p>\n<pre><code class=\"lang-js\">selector: [\n    {\n        type: &#39;all or inverse&#39;,\n        // can be any title you like\n        title: &#39;All&#39;\n    },\n    {\n        type: &#39;inverse&#39;,\n        title: &#39;Inv&#39;\n    }\n]\n\n// or\nselector: true\n\n// or\nselector: [&#39;all&#39;, &#39;inverse&#39;]\n</code></pre>\n"
  },
  "selectorLabel": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.4.0</code></p>\n</blockquote>\n<p>The text label style of the selector button, which is displayed by default.</p>\n"
  },
  "selectorLabel.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "selectorLabel.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "selectorLabel.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "selectorLabel.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "selectorLabel.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "selectorLabel.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "selectorLabel.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "selectorLabel.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "selectorLabel.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "selectorLabel.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "selectorLabel.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "selectorLabel.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "selectorLabel.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "selectorLabel.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "selectorLabel.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "selectorLabel.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "selectorLabel.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorLabel.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorLabel.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "selectorLabel.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "selectorLabel.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "selectorLabel.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "selectorLabel.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorLabel.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorLabel.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "selectorLabel.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "selectorLabel.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "selectorLabel.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "selectorLabel.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "selectorLabel.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "selectorLabel.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "selectorLabel.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "selectorLabel.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "selectorLabel.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "selectorLabel.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "selectorLabel.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "selectorLabel.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "selectorLabel.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "selectorLabel.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorLabel.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorLabel.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "selectorLabel.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "selectorLabel.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "selectorLabel.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "selectorLabel.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectorLabel.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorLabel.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "selectorPosition": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.4.0</code></p>\n</blockquote>\n<p>The position of the selector button, which can be placed at the end or start of the legend component, the corresponding values are <code class=\"codespan\">&#39;end&#39;</code> and <code class=\"codespan\">&#39;start&#39;</code>. By default, when the legend is laid out horizontally, the selector is placed at the end of it, and when the legend is laid out vertically, the selector is placed at the start of it.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,start,end"
    }
  },
  "selectorItemGap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.4.0</code></p>\n</blockquote>\n<p>The gap between the selector button.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "7",
      "step": "0.5"
    }
  },
  "selectorButtonGap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.4.0</code></p>\n</blockquote>\n<p>The gap between selector button and legend component.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "10",
      "step": "0.5"
    }
  }
}