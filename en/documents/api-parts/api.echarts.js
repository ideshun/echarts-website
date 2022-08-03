window.__EC_DOC_api_echarts = {"init":{"desc":"<pre><code class=\"lang-ts\">(dom: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {\n    devicePixelRatio?: number,\n    renderer?: string,\n    useDirtyRect?: boolean, // Since `5.0.0`\n    ssr?: boolean,          // Since `5.3.0`\n    width?: number|string,\n    height?: number|string,\n    locale?: string         // Since `5.0.0`\n}) =&gt; ECharts\n</code></pre>\n<p>Creates an ECharts instance, and returns an <a href=\"#echartsInstance\">echartsInstance</a>. You shall not initialize multiple ECharts instances on a single container.</p>\n<p><strong>Parameters</strong></p>\n<ul>\n<li><p><code class=\"codespan\">dom</code></p>\n<p>  Instance container, usually is a DIV element with height and width defined. It&#39;s only optional when <code class=\"codespan\">opts.ssr</code> is enabled for server-side rendering.</p>\n<p>  It can also be a <code class=\"codespan\">canvas</code> element. thus the canvas can be used somewhere else as image directly after rendering the chart. For example, canvas can be used as a texture in WebGL, which enables updating charts in real-time, as compared to using images generated with <a href=\"#echartsInstance.getDataURL\">echartsInstance.getDataURL</a>.</p>\n</li>\n<li><p><code class=\"codespan\">theme</code></p>\n<p>  Theme to be applied. This can be a configuring object of a theme, or a theme name registered through <a href=\"#echarts.registerTheme\">echarts.registerTheme</a>. See <a href=\"https://echarts.apache.org/handbook/en/concepts/style\" target=\"_blank\">Overview of Style Customization</a>.</p>\n</li>\n<li><p><code class=\"codespan\">opts</code></p>\n<p>  Optional chart configurations; which may contain:</p>\n<ul>\n<li><code class=\"codespan\">devicePixelRatio</code> Ratio of one physical pixel to the size of one device independent pixels. Browser&#39;s <code class=\"codespan\">window.devicePixelRatio</code> is used by default.</li>\n<li><code class=\"codespan\">renderer</code>  Supports <code class=\"codespan\">&#39;canvas&#39;</code> or <code class=\"codespan\">&#39;svg&#39;</code>. See <a href=\"https://echarts.apache.org/handbook/en/best-practices/canvas-vs-svg\" target=\"_blank\">Render by Canvas or SVG</a>.</li>\n<li><code class=\"codespan\">ssr</code> Whether to use server-side rendering. Only available in SVG rendering mode. When enabled, it will no longer render automatically every frame, you have to use the <a href=\"#echartsInstance.renderToSVGString\">renderToSVGString</a> method to get the rendered SVG string.</li>\n<li><code class=\"codespan\">useDirtyRect</code>  Enable dirty rectangle rendering or not, <code class=\"codespan\">false</code> by default. See <a href=\"https://echarts.apache.org/handbook/en/basics/release-note/v5-feature\" target=\"_blank\">New features in ECharts 5</a>.</li>\n<li><code class=\"codespan\">width</code>  Specify width explicitly, in pixel. If setting to <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code>/<code class=\"codespan\">&#39;auto&#39;</code>, width of <code class=\"codespan\">dom</code> (instance container) will be used.</li>\n<li><code class=\"codespan\">height</code>  Specify height explicitly, in pixel. If setting to <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code>/<code class=\"codespan\">&#39;auto&#39;</code>, height of <code class=\"codespan\">dom</code> (instance container) will be used.</li>\n<li><p><code class=\"codespan\">locale</code> Specify the locale. There are two builtins: <code class=\"codespan\">&#39;ZH&#39;</code> and <code class=\"codespan\">&#39;EN&#39;</code>. Or you can use <a href=\"#echarts.registerLocale\">echarts.registerLocale</a> to register a new locale. Or supported locales can be referenced in <a href=\"https://github.com/apache/echarts/tree/release/src/i18n\" target=\"_blank\">src/i18n</a>.</p>\n<p>If no need to specify a theme, a <code class=\"codespan\">null</code> should be passed before <code class=\"codespan\">opts</code> . Example:</p>\n<pre><code class=\"lang-ts\">const chart = echarts.init(dom, null, {renderer: &#39;svg&#39;});\n</code></pre>\n</li>\n</ul>\n</li>\n</ul>\n<p><strong>Note</strong></p>\n<p>If DIV is hidden, ECharts initialization tends to fail due to the lack of width and height information. In this case, you can explicitly specify <code class=\"codespan\">style.width</code> and <code class=\"codespan\">style.height</code> of DIV, or manually call <a href=\"#echartsInstance.resize\">echartsInstance.resize</a> after showing DIV.</p>\n<p>The height and width must be set via <code class=\"codespan\">opts.width</code> and <code class=\"codespan\">opts.height</code> in the server side rendering.</p>\n"},"connect":{"desc":"<pre><code class=\"lang-ts\">(group:string|Array)\n</code></pre>\n<p>Connects interaction of multiple chart series.</p>\n<p><strong>Parameters</strong></p>\n<ul>\n<li><code class=\"codespan\">group</code>\n  Group id, or array of chart instance.</li>\n</ul>\n<p><strong>For example: </strong></p>\n<pre><code class=\"lang-ts\">// set group id of each instance respectively.\nchart1.group = &#39;group1&#39;;\nchart2.group = &#39;group1&#39;;\necharts.connect(&#39;group1&#39;);\n// or incoming instance array that need to be linked.\necharts.connect([chart1, chart2]);\n</code></pre>\n"},"disconnect":{"desc":"<pre><code class=\"lang-ts\">(group:string)\n</code></pre>\n<p>Disconnects interaction of multiple chart series. To have one single instance to be removed, you can set <code class=\"codespan\">group</code> of chart instance to be null.</p>\n<p><strong>Parameters</strong></p>\n<ul>\n<li><p><code class=\"codespan\">group</code></p>\n<p>  group id.</p>\n</li>\n</ul>\n"},"dispose":{"desc":"<pre><code class=\"lang-ts\">(target: ECharts|HTMLDivElement|HTMLCanvasElement)\n</code></pre>\n<p>Destroys chart instance, after which the instance cannot be used any more.</p>\n"},"getInstanceByDom":{"desc":"<pre><code class=\"lang-ts\">(target: HTMLDivElement|HTMLCanvasElement) =&gt; ECharts\n</code></pre>\n<p>Returns chart instance of dom container.</p>\n"},"use":{"desc":"<blockquote>\n<p>Since <code class=\"codespan\">5.0.1</code></p>\n</blockquote>\n<p>Use components. Used with the new tree-shaking API.</p>\n<p>NOTE: <code class=\"codespan\">echarts.use</code> must be used before <code class=\"codespan\">eharts.init</code></p>\n<pre><code class=\"lang-ts\">// Import the echarts core module, which provides the necessary interfaces for using echarts.\nimport * as echarts from &#39;echarts/core&#39;;\n// Import bar charts, all with Chart suffix\nimport {\n    BarChart\n} from &#39;echarts/charts&#39;;\n// import rectangular coordinate system component, all suffixed with Component\nimport {\n    GridComponent\n} from &#39;echarts/components&#39;;\n// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step\nimport {\n    CanvasRenderer\n} from &#39;echarts/renderers&#39;;\n\n// Register the required components\necharts.use(\n    [GridComponent, BarChart, CanvasRenderer]\n);\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/handbook/en/basics/import\" target=\"_blank\">Use ECharts with bundler and NPM</a> for more detailed explaination.</p>\n"},"registerMap":{"desc":"<pre><code class=\"lang-ts\">(\n    mapName: string,\n    opt: {\n        geoJSON: Object | string;\n        specialAreas?: Object;\n    }\n)\n| (\n    mapName: string,\n    opt: {\n        svg: Object | string;\n    }\n)\n| (\n    mapName: string,\n    geoJSON: Object | string,\n    specialAreas?: Object\n)\n</code></pre>\n<p>Registers available maps. This can only be used after including <a href=\"option.html#geo\" target=\"_blank\">geo</a> component or chart series of <a href=\"option.html#series-map\" target=\"_blank\">map</a>.</p>\n<p>Please refer to <a href=\"option.html#geo.map\" target=\"_blank\">option.geo</a> for usage.</p>\n<p><strong>Parameters</strong></p>\n<ul>\n<li><p><code class=\"codespan\">mapName</code></p>\n<p>  Map name, referring to <code class=\"codespan\">map</code> value set in <a href=\"option.html#geo\" target=\"_blank\">geo</a> component or <a href=\"option.html#series-map\" target=\"_blank\">map</a>.</p>\n</li>\n<li><p><code class=\"codespan\">opt</code></p>\n<ul>\n<li><p><code class=\"codespan\">geoJSON</code> Optional. Data in GeoJson format. See <a href=\"https://geojson.org/\" target=\"_blank\">https://geojson.org/</a> for more format information. Can be a JSON string or a parsed object. This key can also be <code class=\"codespan\">geoJson</code>.</p>\n</li>\n<li><p><code class=\"codespan\">svg</code> Optional. Data in SVG format. Can be a SVG string or a parsed SVG DOM object. See more info in <a href=\"tutorial.html#SVG%20Base%20Map%20in%20Geo%20Coords%20and%20Map%20SeriesSVG%20Base%20Map\" target=\"_blank\">SVG Base Map</a>. Introduced in v5.1.0</p>\n</li>\n<li><p><code class=\"codespan\">specialAreas</code> Optional. zoomed part of a specific area in the map for better visual effect. Only work for <code class=\"codespan\">geoJSON</code>.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p><strong>For example <a href=\"https://echarts.apache.org/examples/en/editor.html?c=map-usa\" target=\"_blank\">USA Population Estimates</a>: </strong></p>\n<pre><code class=\"lang-ts\">echarts.registerMap(&#39;USA&#39;, usaJson, {\n    // Move Alaska to the bottom left of United States\n    Alaska: {\n        // Upper left longitude\n        left: -131,\n        // Upper left latitude\n        top: 25,\n        // Range of longitude\n        width: 15\n    },\n    // Hawaii\n    Hawaii: {\n        left: -110,\n        top: 28,\n        width: 5\n    },\n    // Puerto Rico\n    &#39;Puerto Rico&#39;: {\n        left: -76,\n        top: 26,\n        width: 2\n    }\n});\n</code></pre>\n<p>Note:</p>\n<p>If you only import the required components in your project, starting from v5.3.0 <code class=\"codespan\">registerMap</code> has to be used after the <code class=\"codespan\">MapChart</code> or <code class=\"codespan\">GeoComponent</code> is imported.</p>\n"},"getMap":{"desc":"<pre><code class=\"lang-ts\">(mapName: string)\n</code></pre>\n<p>Get a registered map in the following format:</p>\n<pre><code class=\"lang-ts\">{\n    // geoJSON data of the map\n    geoJSON: Object,\n    // special area, see registerMap() for more information\n    specialAreas: Object\n}\n</code></pre>\n<p>Note:</p>\n<ul>\n<li><code class=\"codespan\">geoJSON</code> can also be <code class=\"codespan\">geoJson</code>, they have the same reference.</li>\n<li>SVG registered by <code class=\"codespan\">registerMap</code> can not be obtained by this method yet.</li>\n<li>If you only import the required components in your project, starting from v5.3.0 <code class=\"codespan\">getMap</code> has to be used after the <code class=\"codespan\">MapChart</code> or <code class=\"codespan\">GeoComponent</code> is imported.</li>\n</ul>\n"},"registerTheme":{"desc":"<pre><code class=\"lang-ts\">(themeName: string, theme: Object)\n</code></pre>\n<p>Registers a theme, should be specified when <a href=\"#echarts.init\">initialize the chart instance</a>.</p>\n"},"registerLocale":{"desc":"<blockquote>\n<p>Since <code class=\"codespan\">5.0.0</code></p>\n</blockquote>\n<pre><code class=\"lang-ts\">(locale: string, localeCfg: Object)\n</code></pre>\n<p>Registers a locale, should be specified when <a href=\"#echarts.init\">initialize the chart instance</a>. See the format in <a href=\"https://github.com/apache/echarts/blob/release/src/i18n/langEN.ts\" target=\"_blank\">src/i18n/langEN.ts</a></p>\n"},"setPlatformAPI":{"desc":"<blockquote>\n<p>Since <code class=\"codespan\">5.3.0</code></p>\n</blockquote>\n<pre><code class=\"lang-ts\">(platformAPI?: {\n    createCanvas(): HTMLCanvasElement\n    measureText(text: string, font?: string): { width: number }\n    loadImage(\n        src: string,\n        onload: () =&gt; void,\n        onerror: () =&gt; void\n    ): HTMLImageElement\n}) =&gt; void\n</code></pre>\n<p>Sets the platform-related API, which may need to be provided when non-browser platforms such as NodeJS.</p>\n<ul>\n<li><code class=\"codespan\">createCanvas</code> Creates a Canvas element, mainly used for measuring text width, which is required when <code class=\"codespan\">measureText</code> is not provided.</li>\n<li><code class=\"codespan\">measureText</code> measures the width of the text. By default will use the interface provided by the Canvas element to measure the width of the text. It can be replaced with a lighter implementation.</li>\n<li><code class=\"codespan\">loadImage</code> Load image, required when using Canvas rendering mode and using URLs as images.</li>\n</ul>\n"},"graphic":{"desc":"<p>Util methods about graphics.</p>\n"},"graphic.extendShape":{"desc":"<p>Create a new shape class.</p>\n<pre><code class=\"lang-ts\">(\n    opts: Object\n) =&gt; zrender.graphic.Path\n</code></pre>\n<p>The details of the parameter <code class=\"codespan\">opts</code> can be checked in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderpath\" target=\"_blank\">zrender.graphic.Path</a></p>\n"},"graphic.registerShape":{"desc":"<p>Register a user defined shape.</p>\n<pre><code class=\"lang-ts\">(\n    name: string,\n    ShapeClass: zrender.graphic.Path\n)\n</code></pre>\n<p>The <code class=\"codespan\">ShapeClass</code> should be generated by <a href=\"#echarts.graphic.extendShape\">echarts.graphic.extendShape</a>.\nThen the shape class can be fetched by <a href=\"#echarts.graphic.getShapeClass\">echarts.graphic.getShapeClass</a>\n<code class=\"codespan\">registerShape</code> will overwrite the registered shapes, including the registered built-in shapes, if using the same <code class=\"codespan\">name</code>.\nThe registered shapes can be used in <a href=\"option.html#series-custom\" target=\"_blank\">custom series</a> and\n<a href=\"option.html#graphic\" target=\"_blank\">graphic component</a> by declaring <code class=\"codespan\">{type: name}</code>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">var MyShape = echarts.graphic.extendShape({\n    shape: {\n        x: 0,\n        y: 0,\n        width: 0,\n        height: 0\n    },\n    buildPath: function (ctx, shape) {\n        ctx.moveTo(shape.x, shape.y);\n        ctx.lineTo(shape.x + shape.width, shape.y);\n        ctx.lineTo(shape.x, shape.y + shape.height);\n        ctx.lineTo(shape.x + shape.width, shape.y + shape.height);\n        ctx.closePath();\n    }\n});\necharts.graphic.registerShape(&#39;myCustomShape&#39;, MyShape);\n\nvar option = {\n    series: {\n        type: &#39;custom&#39;,\n        coordinateSystem: &#39;none&#39;,\n        renderItem: function (params, api) {\n            return {\n                type: &#39;myCustomShape&#39;,\n                shape: {\n                    x: api.value(0),\n                    y: api.value(1),\n                    width: api.value(2),\n                    height: api.value(3)\n                },\n                style: {\n                    fill: &#39;red&#39;\n                }\n            };\n        },\n        data: [[10, 20, 30, 40]]\n    }\n};\n</code></pre>\n"},"graphic.getShapeClass":{"desc":"<p>Get the <a href=\"#echarts.graphic.registerShape\">registered</a> shape class.</p>\n<pre><code class=\"lang-ts\">(\n    name: String\n) =&gt; zrender.graphic.Path\n</code></pre>\n<p>Some built-in shapes are registered by default:\n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;sector&#39;</code>, <code class=\"codespan\">&#39;ring&#39;</code>, <code class=\"codespan\">&#39;polygon&#39;</code>, <code class=\"codespan\">&#39;polyline&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;line&#39;</code>, <code class=\"codespan\">&#39;bezierCurve&#39;</code>, <code class=\"codespan\">&#39;arc&#39;</code>.</p>\n"},"graphic.clipPointsByRect":{"desc":"<p>Clip the given points by the given rectangular.</p>\n<pre><code class=\"lang-ts\">(\n    // The points to be clipped, like [[23, 44], [12, 15], ...].\n    points: Array.&lt;Array.&lt;number&gt;&gt;,\n    // The rectangular that is used to clip points.\n    rect: {\n        x: number,\n        y: number,\n        width: number,\n        height: number\n    }\n) =&gt; Array.&lt;Array.&lt;number&gt;&gt; // The result Points.\n</code></pre>\n"},"graphic.clipRectByRect":{"desc":"<p>Clip the first input rectangular by the second input rectangular.</p>\n<pre><code class=\"lang-ts\">(\n    // The rectangular to be clipped.\n    targetRect: {\n        x: number,\n        y: number,\n        width: number,\n        height: number\n    },\n    // The rectangular that is used to clip the first  rectangular.\n    rect: {\n        x: number,\n        y: number,\n        width: number,\n        height: number\n    }\n) =&gt; { // The result rectangular.\n    x: number,\n    y: number,\n    width: number,\n    height: number\n}\n</code></pre>\n<p>Notice: if the rect is totally clipped, returns <code class=\"codespan\">undefined</code>.</p>\n"}}