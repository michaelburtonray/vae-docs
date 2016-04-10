Dir["/Users/bombino/alicia/vae-docs/*.md"].each do |file|
  data = File.open(file).read
  out = File.open(file, "w")
  state = :other
  block = []
  data.lines.each do |line|
    block << line.gsub(/\n/, "")
    if line == "\n" and state != :indented
      if state == :code
        code = block.map { |line| line[4..10000] }.join("\n")
        if code =~ /<\?php/
          type = :php
        elsif code =~ /<\?xml/
          type = :xml
        elsif code =~ /</
          type = :html
        else
          type = :raw
        end
        if type == :raw
          out.write block.join("\n")
        else
          out.write "{% highlight #{type} %}\n"
          out.write code
          out.write "{% endhighlight %}\n"
        end
      end
      state = :newline
      block = []
    elsif line[0..3] == "    "
      if (state == :newline or state == :code) and line[4] != "" and line[4] != "-"
        state = :code
      else
        state = :indented
      end
    else
      state = :other
    end
    if state != :code
      out.write line
    end
  end
  if state == :code
    out.write block.join("\n")
    out.write "\n"
  end
end
