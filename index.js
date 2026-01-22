const DB = [
  // Display
  {
    class: "block",
    css: "display: block;",
    description:
      "Hiển thị phần tử như một khối, chiếm toàn bộ chiều rộng có thể.",
  },
  {
    class: "hidden",
    css: "display: none;",
    description: "Ẩn phần tử hoàn toàn khỏi trang, không chiếm không gian.",
  },
  {
    class: "inline",
    css: "display: inline;",
    description:
      "Hiển thị phần tử nội tuyến, chỉ chiếm đủ chiều rộng nội dung, không xuống dòng.",
  },
  {
    class: "inline-block",
    css: "display: inline-block;",
    description:
      "Hiển thị nội tuyến nhưng có thể đặt chiều rộng, chiều cao và margin/padding.",
  },
  {
    class: "flex",
    css: "display: flex;",
    description:
      "Hiển thị như một hộp linh hoạt (flex container), dễ dàng căn chỉnh các item bên trong.",
  },
  {
    class: "grid",
    css: "display: grid;",
    description:
      "Hiển thị như một bố cục lưới (grid container), dễ dàng tạo các bố cục phức tạp.",
  },
  {
    class: "contents",
    css: "display: contents;",
    description:
      "Biến phần tử thành một 'hộp ảo', các con của nó sẽ hiển thị trực tiếp trong ngữ cảnh của cha.",
  },
  {
    class: "list-item",
    css: "display: list-item;",
    description: "Hiển thị phần tử như một mục trong danh sách.",
  },

  // Flexbox & Grid
  {
    class: "flex-row",
    css: "flex-direction: row;",
    description: "Sắp xếp các item con của flexbox theo hàng ngang.",
  },
  {
    class: "flex-col",
    css: "flex-direction: column;",
    description: "Sắp xếp các item con của flexbox theo cột dọc.",
  },
  {
    class: "flex-wrap",
    css: "flex-wrap: wrap;",
    description:
      "Cho phép các item trong flexbox tự động xuống dòng khi không còn đủ không gian.",
  },
  {
    class: "flex-nowrap",
    css: "flex-wrap: nowrap;",
    description:
      "Ngăn các item trong flexbox xuống dòng, tất cả sẽ nằm trên một hàng/cột.",
  },
  {
    class: "flex-grow",
    css: "flex-grow: 1;",
    description:
      "Cho phép một item flex box co giãn để lấp đầy không gian trống.",
  },
  {
    class: "flex-shrink",
    css: "flex-shrink: 1;",
    description: "Cho phép một item flex box co lại khi không đủ không gian.",
  },
  {
    class: "items-start",
    css: "align-items: flex-start;",
    description:
      "Căn chỉnh các item theo trục cross (mặc định là dọc) về phía đầu container.",
  },
  {
    class: "items-center",
    css: "align-items: center;",
    description:
      "Căn giữa các item theo trục cross (mặc định là dọc) trong container.",
  },
  {
    class: "items-end",
    css: "align-items: flex-end;",
    description:
      "Căn chỉnh các item theo trục cross (mặc định là dọc) về phía cuối container.",
  },
  {
    class: "items-baseline",
    css: "align-items: baseline;",
    description:
      "Căn chỉnh các item theo trục cross dựa trên đường baseline của chữ.",
  },
  {
    class: "items-stretch",
    css: "align-items: stretch;",
    description: "Kéo dãn các item để lấp đầy chiều cao/rộng của container.",
  },
  {
    class: "justify-start",
    css: "justify-content: flex-start;",
    description:
      "Căn chỉnh các item theo trục main (mặc định là ngang) về phía đầu container (đẩy các thành phần sang trái).",
  },
  {
    class: "justify-center",
    css: "justify-content: center;",
    description:
      "Căn giữa các item theo trục main (mặc định là ngang) trong container.",
  },
  {
    class: "justify-end",
    css: "justify-content: flex-end;",
    description:
      "Căn chỉnh các item theo trục main (mặc định là ngang) về phía cuối container (đẩy các thành phần sang phải).",
  },
  {
    class: "justify-between",
    css: "justify-content: space-between;",
    description:
      "Chia đều khoảng cách giữa các item, item đầu và cuối dính sát hai biên container.",
  },
  {
    class: "justify-around",
    css: "justify-content: space-around;",
    description: "Chia đều khoảng cách giữa và xung quanh các item.",
  },
  {
    class: "justify-evenly",
    css: "justify-content: space-evenly;",
    description: "Chia đều khoảng cách giữa các item và cả ở hai đầu.",
  },
  {
    class: "gap-0",
    css: "gap: 0px;",
    description: "Không có khoảng cách (gap) giữa các item trong flexbox/grid.",
  },
  {
    class: "gap-1",
    css: "gap: 0.25rem;",
    description: "Tạo một khoảng cách nhỏ giữa các item trong flexbox/grid.",
  },
  {
    class: "gap-4",
    css: "gap: 1rem;",
    description:
      "Tạo một khoảng cách vừa phải giữa các item trong flexbox/grid.",
  },
  {
    class: "gap-x-4",
    css: "column-gap: 1rem;",
    description: "Tạo khoảng cách ngang giữa các cột trong flexbox/grid.",
  },
  {
    class: "gap-y-4",
    css: "row-gap: 1rem;",
    description: "Tạo khoảng cách dọc giữa các hàng trong flexbox/grid.",
  },
  {
    class: "grid-cols-1",
    css: "grid-template-columns: repeat(1, minmax(0, 1fr));",
    description: "Tạo bố cục lưới với 1 cột có chiều rộng linh hoạt.",
  },
  {
    class: "grid-cols-2",
    css: "grid-template-columns: repeat(2, minmax(0, 1fr));",
    description: "Tạo bố cục lưới với 2 cột có chiều rộng linh hoạt.",
  },
  {
    class: "grid-rows-1",
    css: "grid-template-rows: repeat(1, minmax(0, 1fr));",
    description: "Tạo bố cục lưới với 1 hàng có chiều cao linh hoạt.",
  },
  {
    class: "col-span-1",
    css: "grid-column: span 1 / span 1;",
    description: "Cho một item trong grid chiếm 1 cột.",
  },
  {
    class: "row-span-1",
    css: "grid-row: span 1 / span 1;",
    description: "Cho một item trong grid chiếm 1 hàng.",
  },

  // Spacing (Padding)
  {
    class: "p-0",
    css: "padding: 0px;",
    description: "Đặt padding bằng 0 cho tất cả các phía.",
  },
  {
    class: "p-1",
    css: "padding: 0.25rem;",
    description: "Đặt padding nhỏ đều cho tất cả các phía.",
  },
  {
    class: "p-2",
    css: "padding: 0.5rem;",
    description: "Đặt padding trung bình nhỏ đều cho tất cả các phía.",
  },
  {
    class: "p-4",
    css: "padding: 1rem;",
    description: "Đặt padding vừa phải đều cho tất cả các phía.",
  },
  {
    class: "px-4",
    css: "padding-left: 1rem; padding-right: 1rem;",
    description: "Đặt padding ngang (trái, phải) vừa phải.",
  },
  {
    class: "py-4",
    css: "padding-top: 1rem; padding-bottom: 1rem;",
    description: "Đặt padding dọc (trên, dưới) vừa phải.",
  },
  {
    class: "pt-4",
    css: "padding-top: 1rem;",
    description: "Đặt padding trên vừa phải.",
  },
  {
    class: "pr-4",
    css: "padding-right: 1rem;",
    description: "Đặt padding phải vừa phải.",
  },
  {
    class: "pb-4",
    css: "padding-bottom: 1rem;",
    description: "Đặt padding dưới vừa phải.",
  },
  {
    class: "pl-4",
    css: "padding-left: 1rem;",
    description: "Đặt padding trái vừa phải.",
  },

  // Spacing (Margin)
  {
    class: "m-0",
    css: "margin: 0px;",
    description: "Đặt margin bằng 0 cho tất cả các phía.",
  },
  {
    class: "m-1",
    css: "margin: 0.25rem;",
    description: "Đặt margin nhỏ đều cho tất cả các phía.",
  },
  {
    class: "m-2",
    css: "margin: 0.5rem;",
    description: "Đặt margin trung bình nhỏ đều cho tất cả các phía.",
  },
  {
    class: "m-4",
    css: "margin: 1rem;",
    description: "Đặt margin vừa phải đều cho tất cả các phía.",
  },
  {
    class: "mx-auto",
    css: "margin-left: auto; margin-right: auto;",
    description: "Căn giữa khối theo chiều ngang một cách tự động.",
  },
  {
    class: "ml-auto",
    css: "margin-left: auto;",
    description: "Đẩy phần tử sang phải bằng cách đặt lề trái tự động.",
  },
  {
    class: "mr-auto",
    css: "margin-right: auto;",
    description: "Đẩy phần tử sang trái bằng cách đặt lề phải tự động.",
  },
  {
    class: "mx-4",
    css: "margin-left: 1rem; margin-right: 1rem;",
    description: "Đặt margin ngang (trái, phải) vừa phải.",
  },
  {
    class: "my-4",
    css: "margin-top: 1rem; margin-bottom: 1rem;",
    description: "Đặt margin dọc (trên, dưới) vừa phải.",
  },

  // Sizing
  {
    class: "w-0",
    css: "width: 0px;",
    description: "Thiết lập chiều rộng phần tử bằng 0.",
  },
  {
    class: "w-1/2",
    css: "width: 50%;",
    description: "Thiết lập chiều rộng phần tử bằng 50% của phần tử cha.",
  },
  {
    class: "w-full",
    css: "width: 100%;",
    description: "Thiết lập chiều rộng phần tử bằng 100% của phần tử cha.",
  },
  {
    class: "w-screen",
    css: "width: 100vw;",
    description:
      "Thiết lập chiều rộng phần tử bằng 100% chiều rộng của khung nhìn (viewport).",
  },
  {
    class: "h-0",
    css: "height: 0px;",
    description: "Thiết lập chiều cao phần tử bằng 0.",
  },
  {
    class: "h-1/2",
    css: "height: 50%;",
    description: "Thiết lập chiều cao phần tử bằng 50% của phần tử cha.",
  },
  {
    class: "h-full",
    css: "height: 100%;",
    description: "Thiết lập chiều cao phần tử bằng 100% của phần tử cha.",
  },
  {
    class: "h-screen",
    css: "height: 100vh;",
    description:
      "Thiết lập chiều cao phần tử bằng 100% chiều cao của khung nhìn (viewport).",
  },
  {
    class: "min-w-0",
    css: "min-width: 0px;",
    description: "Thiết lập chiều rộng tối thiểu là 0.",
  },
  {
    class: "min-h-0",
    css: "min-height: 0px;",
    description: "Thiết lập chiều cao tối thiểu là 0.",
  },
  {
    class: "min-h-screen",
    css: "min-height: 100vh;",
    description:
      "Thiết lập chiều cao tối thiểu phần tử bằng 100% chiều cao của khung nhìn (viewport).",
  },
  {
    class: "max-w-md",
    css: "max-width: 28rem;",
    description: "Thiết lập chiều rộng tối đa vừa phải cho phần tử.",
  },
  {
    class: "max-h-full",
    css: "max-height: 100%;",
    description: "Thiết lập chiều cao tối đa bằng 100% của phần tử cha.",
  },

  // Typography
  {
    class: "text-xs",
    css: "font-size: 0.75rem; line-height: 1rem;",
    description: "Kích thước chữ siêu nhỏ với chiều cao dòng tương ứng.",
  },
  {
    class: "text-sm",
    css: "font-size: 0.875rem; line-height: 1.25rem;",
    description: "Kích thước chữ nhỏ với chiều cao dòng tương ứng.",
  },
  {
    class: "text-base",
    css: "font-size: 1rem; line-height: 1.5rem;",
    description:
      "Kích thước chữ cơ bản (mặc định) với chiều cao dòng tương ứng.",
  },
  {
    class: "text-lg",
    css: "font-size: 1.125rem; line-height: 1.75rem;",
    description: "Kích thước chữ lớn với chiều cao dòng tương ứng.",
  },
  {
    class: "text-xl",
    css: "font-size: 1.25rem; line-height: 1.75rem;",
    description: "Kích thước chữ rất lớn với chiều cao dòng tương ứng.",
  },
  {
    class: "text-center",
    css: "text-align: center;",
    description: "Căn chỉnh văn bản ra giữa.",
  },
  {
    class: "text-left",
    css: "text-align: left;",
    description: "Căn chỉnh văn bản sang trái.",
  },
  {
    class: "text-right",
    css: "text-align: right;",
    description: "Căn chỉnh văn bản sang phải.",
  },
  {
    class: "text-justify",
    css: "text-align: justify;",
    description: "Căn chỉnh văn bản đều hai biên.",
  },
  {
    class: "font-light",
    css: "font-weight: 300;",
    description: "Độ đậm chữ nhẹ.",
  },
  {
    class: "font-normal",
    css: "font-weight: 400;",
    description: "Độ đậm chữ bình thường.",
  },
  {
    class: "font-medium",
    css: "font-weight: 500;",
    description: "Độ đậm chữ trung bình.",
  },
  {
    class: "font-semibold",
    css: "font-weight: 600;",
    description: "Độ đậm chữ hơi đậm.",
  },
  {
    class: "font-bold",
    css: "font-weight: 700;",
    description: "Độ đậm chữ in đậm.",
  },
  {
    class: "font-extrabold",
    css: "font-weight: 800;",
    description: "Độ đậm chữ rất đậm.",
  },
  {
    class: "italic",
    css: "font-style: italic;",
    description: "Chữ in nghiêng.",
  },
  {
    class: "not-italic",
    css: "font-style: normal;",
    description: "Chữ không in nghiêng.",
  },
  {
    class: "underline",
    css: "text-decoration-line: underline;",
    description: "Chữ có gạch chân.",
  },
  {
    class: "no-underline",
    css: "text-decoration-line: none;",
    description: "Chữ không có gạch chân.",
  },
  {
    class: "uppercase",
    css: "text-transform: uppercase;",
    description: "Chuyển tất cả chữ cái thành in hoa.",
  },
  {
    class: "lowercase",
    css: "text-transform: lowercase;",
    description: "Chuyển tất cả chữ cái thành in thường.",
  },
  {
    class: "capitalize",
    css: "text-transform: capitalize;",
    description: "Viết hoa chữ cái đầu tiên của mỗi từ.",
  },
  {
    class: "normal-case",
    css: "text-transform: none;",
    description: "Bình thường hóa chữ cái, không chuyển đổi.",
  },
  {
    class: "leading-none",
    css: "line-height: 1;",
    description: "Đặt chiều cao dòng nhỏ nhất.",
  },
  {
    class: "leading-tight",
    css: "line-height: 1.25;",
    description: "Đặt chiều cao dòng chặt.",
  },
  {
    class: "leading-normal",
    css: "line-height: 1.5;",
    description: "Đặt chiều cao dòng bình thường.",
  },
  {
    class: "tracking-tight",
    css: "letter-spacing: -0.025em;",
    description: "Thu hẹp khoảng cách giữa các ký tự.",
  },
  {
    class: "tracking-normal",
    css: "letter-spacing: 0em;",
    description: "Khoảng cách ký tự bình thường.",
  },
  {
    class: "tracking-wide",
    css: "letter-spacing: 0.025em;",
    description: "Mở rộng khoảng cách giữa các ký tự.",
  },

  // Colors (Examples)
  {
    class: "text-white",
    css: "color: #ffffff;",
    description: "Màu chữ trắng.",
  },
  { class: "text-black", css: "color: #000000;", description: "Màu chữ đen." },
  {
    class: "text-gray-500",
    css: "color: #6b7280;",
    description: "Màu chữ xám trung bình.",
  },
  { class: "text-red-500", css: "color: #ef4444;", description: "Màu chữ đỏ." },
  {
    class: "text-blue-500",
    css: "color: #3b82f6;",
    description: "Màu chữ xanh dương.",
  },
  {
    class: "text-green-500",
    css: "color: #22c55e;",
    description: "Màu chữ xanh lá.",
  },
  {
    class: "bg-white",
    css: "background-color: #ffffff;",
    description: "Màu nền trắng.",
  },
  {
    class: "bg-black",
    css: "background-color: #000000;",
    description: "Màu nền đen.",
  },
  {
    class: "bg-gray-200",
    css: "background-color: #e5e7eb;",
    description: "Màu nền xám nhạt.",
  },
  {
    class: "bg-red-500",
    css: "background-color: #ef4444;",
    description: "Màu nền đỏ.",
  },
  {
    class: "bg-blue-500",
    css: "background-color: #3b82f6;",
    description: "Màu nền xanh dương.",
  },
  {
    class: "bg-green-500",
    css: "background-color: #22c55e;",
    description: "Màu nền xanh lá.",
  },
  {
    class: "bg-transparent",
    css: "background-color: transparent;",
    description: "Màu nền trong suốt.",
  },
  {
    class: "bg-current",
    css: "background-color: currentColor;",
    description: "Màu nền giống màu chữ hiện tại.",
  },
  {
    class: "from-blue-500",
    css: "--tw-gradient-from: #3b82f6;",
    description: "Màu bắt đầu cho gradient nền.",
  },
  {
    class: "to-purple-600",
    css: "--tw-gradient-to: #9333ea;",
    description: "Màu kết thúc cho gradient nền.",
  },
  {
    class: "bg-gradient-to-r",
    css: "background-image: linear-gradient(to right, var(--tw-gradient-stops));",
    description: "Tạo gradient nền từ trái sang phải.",
  },

  // Borders
  {
    class: "border",
    css: "border-width: 1px;",
    description: "Thêm viền mỏng 1px đều các cạnh.",
  },
  {
    class: "border-2",
    css: "border-width: 2px;",
    description: "Thêm viền dày 2px đều các cạnh.",
  },
  { class: "border-0", css: "border-width: 0px;", description: "Xóa viền." },
  {
    class: "border-t",
    css: "border-top-width: 1px;",
    description: "Thêm viền trên mỏng 1px.",
  },
  {
    class: "border-b-2",
    css: "border-bottom-width: 2px;",
    description: "Thêm viền dưới dày 2px.",
  },
  {
    class: "border-x-4",
    css: "border-left-width: 4px; border-right-width: 4px;",
    description: "Thêm viền trái phải dày 4px.",
  },
  {
    class: "border-y",
    css: "border-top-width: 1px; border-bottom-width: 1px;",
    description: "Thêm viền trên dưới mỏng 1px.",
  },
  {
    class: "border-solid",
    css: "border-style: solid;",
    description: "Kiểu viền liền.",
  },
  {
    class: "border-dotted",
    css: "border-style: dotted;",
    description: "Kiểu viền chấm chấm.",
  },
  {
    class: "border-dashed",
    css: "border-style: dashed;",
    description: "Kiểu viền gạch ngang.",
  },
  {
    class: "border-double",
    css: "border-style: double;",
    description: "Kiểu viền đôi.",
  },
  {
    class: "border-none",
    css: "border-style: none;",
    description: "Xóa kiểu viền.",
  },
  {
    class: "border-gray-300",
    css: "border-color: #d1d5db;",
    description: "Màu viền xám nhạt.",
  },
  {
    class: "border-red-500",
    css: "border-color: #ef4444;",
    description: "Màu viền đỏ.",
  },
  {
    class: "rounded",
    css: "border-radius: 0.25rem;",
    description: "Bo tròn góc nhỏ cho phần tử.",
  },
  {
    class: "rounded-md",
    css: "border-radius: 0.375rem;",
    description: "Bo tròn góc vừa cho phần tử.",
  },
  {
    class: "rounded-lg",
    css: "border-radius: 0.5rem;",
    description: "Bo tròn góc lớn cho phần tử.",
  },
  {
    class: "rounded-xl",
    css: "border-radius: 0.75rem;",
    description: "Bo tròn góc rất lớn cho phần tử.",
  },
  {
    class: "rounded-full",
    css: "border-radius: 9999px;",
    description: "Bo tròn hoàn toàn thành hình tròn hoặc viên thuốc.",
  },
  {
    class: "rounded-t-lg",
    css: "border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;",
    description: "Bo tròn góc trên bên trái và trên bên phải.",
  },

  // Shadows
  {
    class: "shadow-sm",
    css: "box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);",
    description: "Thêm đổ bóng nhẹ.",
  },
  {
    class: "shadow-md",
    css: "box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);",
    description: "Thêm đổ bóng vừa.",
  },
  {
    class: "shadow-lg",
    css: "box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);",
    description: "Thêm đổ bóng lớn.",
  },
  {
    class: "shadow-xl",
    css: "box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);",
    description: "Thêm đổ bóng rất lớn.",
  },
  {
    class: "shadow-2xl",
    css: "box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);",
    description: "Thêm đổ bóng siêu lớn.",
  },
  {
    class: "shadow-none",
    css: "box-shadow: none;",
    description: "Xóa đổ bóng.",
  },

  // Interactivity
  {
    class: "cursor-pointer",
    css: "cursor: pointer;",
    description:
      "Thay đổi con trỏ chuột thành hình bàn tay khi di chuột qua, thường dùng cho các phần tử có thể nhấp.",
  },
  {
    class: "cursor-not-allowed",
    css: "cursor: not-allowed;",
    description:
      "Thay đổi con trỏ chuột thành biểu tượng cấm, cho biết không thể tương tác.",
  },
  {
    class: "select-none",
    css: "user-select: none;",
    description:
      "Không cho phép người dùng chọn (highlight) văn bản bên trong phần tử.",
  },
  {
    class: "pointer-events-none",
    css: "pointer-events: none;",
    description: "Vô hiệu hóa tất cả sự kiện chuột/chạm trên phần tử.",
  },
  {
    class: "resize",
    css: "resize: both;",
    description:
      "Cho phép người dùng thay đổi kích thước phần tử theo cả chiều ngang và dọc.",
  },

  // Transitions & Transforms
  {
    class: "transition",
    css: "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;",
    description:
      "Áp dụng hiệu ứng chuyển động mượt mà cho tất cả các thuộc tính CSS được thay đổi.",
  },
  {
    class: "transition-colors",
    css: "transition-property: background-color, border-color, color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;",
    description:
      "Áp dụng hiệu ứng chuyển động mượt mà cho các thuộc tính màu sắc.",
  },
  {
    class: "duration-75",
    css: "transition-duration: 75ms;",
    description: "Thiết lập thời gian chuyển động là 75 mili giây.",
  },
  {
    class: "duration-300",
    css: "transition-duration: 300ms;",
    description: "Thiết lập thời gian chuyển động là 300 mili giây.",
  },
  {
    class: "ease-linear",
    css: "transition-timing-function: linear;",
    description: "Thiết lập tốc độ chuyển động đều.",
  },
  {
    class: "ease-in-out",
    css: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    description:
      "Thiết lập tốc độ chuyển động bắt đầu và kết thúc chậm, ở giữa nhanh.",
  },
  {
    class: "rotate-0",
    css: "transform: rotate(0deg);",
    description: "Không xoay phần tử.",
  },
  {
    class: "rotate-45",
    css: "transform: rotate(45deg);",
    description: "Xoay phần tử 45 độ theo chiều kim đồng hồ.",
  },
  {
    class: "scale-95",
    css: "transform: scale(0.95);",
    description: "Thu nhỏ phần tử còn 95% kích thước ban đầu.",
  },
  {
    class: "scale-100",
    css: "transform: scale(1);",
    description: "Giữ nguyên kích thước phần tử.",
  },
  {
    class: "scale-105",
    css: "transform: scale(1.05);",
    description: "Phóng to phần tử lên 105% kích thước ban đầu.",
  },
  {
    class: "translate-x-0",
    css: "transform: translateX(0px);",
    description: "Không dịch chuyển phần tử theo trục X.",
  },
  {
    class: "translate-x-full",
    css: "transform: translateX(100%);",
    description: "Dịch chuyển phần tử hoàn toàn sang phải.",
  },
  {
    class: "translate-y-0",
    css: "transform: translateY(0px);",
    description: "Không dịch chuyển phần tử theo trục Y.",
  },
  {
    class: "translate-y-full",
    css: "transform: translateY(100%);",
    description: "Dịch chuyển phần tử hoàn toàn xuống dưới.",
  },
  {
    class: "skew-x-0",
    css: "transform: skewX(0deg);",
    description: "Không làm nghiêng phần tử theo trục X.",
  },
  {
    class: "skew-y-3",
    css: "transform: skewY(3deg);",
    description: "Làm nghiêng phần tử 3 độ theo trục Y.",
  },

  // Positioning
  {
    class: "static",
    css: "position: static;",
    description:
      "Vị trí mặc định của phần tử, không bị ảnh hưởng bởi top, bottom, left, right.",
  },
  {
    class: "relative",
    css: "position: relative;",
    description:
      "Vị trí tương đối, có thể dịch chuyển khỏi vị trí ban đầu bằng top, bottom, left, right.",
  },
  {
    class: "absolute",
    css: "position: absolute;",
    description:
      "Vị trí tuyệt đối, đặt phần tử so với phần tử cha có position non-static gần nhất.",
  },
  {
    class: "fixed",
    css: "position: fixed;",
    description: "Vị trí cố định trên màn hình, không cuộn theo.",
  },
  {
    class: "sticky",
    css: "position: sticky;",
    description:
      "Vị trí dính, hoạt động như relative cho đến khi cuộn tới một ngưỡng nhất định.",
  },
  {
    class: "top-0",
    css: "top: 0px;",
    description: "Đặt phần tử cách cạnh trên 0px.",
  },
  {
    class: "bottom-0",
    css: "bottom: 0px;",
    description: "Đặt phần tử cách cạnh dưới 0px.",
  },
  {
    class: "left-0",
    css: "left: 0px;",
    description: "Đặt phần tử cách cạnh trái 0px.",
  },
  {
    class: "right-0",
    css: "right: 0px;",
    description: "Đặt phần tử cách cạnh phải 0px.",
  },
  {
    class: "inset-0",
    css: "top: 0px; right: 0px; bottom: 0px; left: 0px;",
    description: "Đặt phần tử cách đều 4 cạnh 0px (phủ kín).",
  },
  {
    class: "inset-x-0",
    css: "left: 0px; right: 0px;",
    description: "Đặt phần tử cách đều cạnh trái và phải 0px.",
  },
  {
    class: "inset-y-0",
    css: "top: 0px; bottom: 0px;",
    description: "Đặt phần tử cách đều cạnh trên và dưới 0px.",
  },
  {
    class: "z-10",
    css: "z-index: 10;",
    description:
      "Kiểm soát thứ tự xếp chồng của các phần tử (lớp nào nằm trên).",
  },
  {
    class: "z-auto",
    css: "z-index: auto;",
    description: "Để trình duyệt tự động quản lý thứ tự xếp chồng.",
  },

  // Overflow
  {
    class: "overflow-auto",
    css: "overflow: auto;",
    description: "Thanh cuộn tự động hiện khi nội dung tràn ra ngoài.",
  },
  {
    class: "overflow-hidden",
    css: "overflow: hidden;",
    description: "Cắt bỏ (ẩn đi) nội dung tràn ra ngoài phần tử.",
  },
  {
    class: "overflow-visible",
    css: "overflow: visible;",
    description: "Nội dung tràn ra ngoài phần tử vẫn được hiển thị.",
  },
  {
    class: "overflow-scroll",
    css: "overflow: scroll;",
    description: "Luôn hiển thị thanh cuộn, ngay cả khi không cần thiết.",
  },
  {
    class: "overflow-x-auto",
    css: "overflow-x: auto;",
    description:
      "Thanh cuộn ngang tự động hiện khi nội dung tràn theo chiều ngang.",
  },
  {
    class: "overflow-y-auto",
    css: "overflow-y: auto;",
    description:
      "Thanh cuộn dọc tự động hiện khi nội dung tràn theo chiều dọc.",
  },

  // Visibility
  {
    class: "visible",
    css: "visibility: visible;",
    description: "Hiển thị phần tử.",
  },
  {
    class: "invisible",
    css: "visibility: hidden;",
    description: "Ẩn phần tử nhưng vẫn chiếm không gian.",
  },

  // Filters
  {
    class: "blur-none",
    css: "filter: blur(0);",
    description: "Không áp dụng hiệu ứng làm mờ.",
  },
  {
    class: "blur-md",
    css: "filter: blur(12px);",
    description: "Áp dụng hiệu ứng làm mờ trung bình.",
  },
  {
    class: "backdrop-blur-sm",
    css: "backdrop-filter: blur(4px);",
    description: "Áp dụng hiệu ứng làm mờ cho nền phía sau phần tử.",
  },

  // Tables
  {
    class: "border-collapse",
    css: "border-collapse: collapse;",
    description: "Gộp các đường viền của bảng lại với nhau.",
  },
  {
    class: "border-separate",
    css: "border-collapse: separate;",
    description: "Giữ các đường viền của bảng riêng biệt.",
  },
  {
    class: "table-auto",
    css: "table-layout: auto;",
    description:
      "Chiều rộng cột của bảng sẽ tự động điều chỉnh dựa trên nội dung.",
  },
  {
    class: "table-fixed",
    css: "table-layout: fixed;",
    description: "Chiều rộng cột của bảng được cố định.",
  },
];

// --- 2. CẤU HÌNH DOM ---
const input = document.getElementById("searchInput");
const list = document.getElementById("resultList");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");

// --- 3. HÀM HIỂN THỊ THÔNG BÁO (TOAST) ---
let toastTimeout;
const showToast = (message) => {
  toastMsg.textContent = message;
  toast.classList.add("show");

  // Tự tắt sau 2 giây
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
};

// --- 4. HÀM RENDER DANH SÁCH ---
const render = (items) => {
  list.innerHTML = ""; // Xóa cũ

  if (items.length === 0) {
    list.innerHTML = `
      <tr class="border-b border-slate-200 dark:border-slate-700">
        <td colspan="4" class="p-8 text-center text-slate-500 dark:text-slate-400 italic">
          😕 Không tìm thấy kết quả nào khớp với từ khóa của bạn.
        </td>
      </tr>`;
    return;
  }

  items.forEach((item) => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors duration-150 cursor-pointer group border-b border-slate-200 dark:border-slate-700 last:border-0";

    // Create cells
    tr.innerHTML = `
        <td class="p-4 align-top border-r border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-cyan-400 font-medium">
            .${item.class}
        </td>
        <td class="p-4 align-top border-r border-slate-200 dark:border-slate-700 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 break-all">
            ${item.css}
        </td>
        <td class="p-4 align-top border-r border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300">
            ${item.description}
        </td>
        <td class="p-4 align-middle text-center w-[80px]">
            <button class="copy-btn p-2 rounded-full hover:bg-cyan-100 dark:hover:bg-cyan-800 text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" title="Sao chép">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H10.5a1.125 1.125 0 01-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </button>
        </td>
    `;

    // Click row to copy
    const handleCopy = (e) => {
        // Prevent double copy if button is clicked directly (optional, but handling bubbling is good)
        navigator.clipboard.writeText(item.class);
        showToast(`Đã sao chép: ${item.class}`);
    };

    tr.addEventListener("click", handleCopy);

    list.appendChild(tr);
  });
};

// --- 5. LOGIC TÌM KIẾM ---
const handleSearch = () => {
  const keyword = input.value.toLowerCase().trim();

  // Lọc dữ liệu dựa trên từ khóa
  const results = DB.filter(
    (item) =>
      item.class.toLowerCase().includes(keyword) ||
      item.css.toLowerCase().includes(keyword) ||
      (item.description && item.description.toLowerCase().includes(keyword))
  );

  render(results);
};

input.addEventListener("input", handleSearch);

// --- 6. KHỞI TẠO ---
// Tự động focus vào ô input khi tải trang
setTimeout(() => input.focus(), 100);

// Hiển thị tất cả các thuộc tính khi trang vừa tải xong
render(DB);
