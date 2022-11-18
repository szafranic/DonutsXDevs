using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DonutsXDevs.Models;

public partial class DxdContext : DbContext
{
    public DxdContext()
    {
    }

    public DxdContext(DbContextOptions<DxdContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Donut> Donuts { get; set; }

    public virtual DbSet<DonutInfo> DonutInfos { get; set; }

    public virtual DbSet<Hall> Halls { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=dxd;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Donut>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__donuts__3213E83F4868A90F");

            entity.ToTable("donuts");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .HasColumnName("name");
            entity.Property(e => e.Photo)
                .HasMaxLength(80)
                .HasColumnName("photo");
            entity.Property(e => e.PhotoAttribution)
                .HasMaxLength(100)
                .HasColumnName("photo_attribution");
            entity.Property(e => e.Ref)
                .HasMaxLength(64)
                .HasColumnName("ref");
        });

        modelBuilder.Entity<DonutInfo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__donutInf__3213E83F5E90C265");

            entity.ToTable("donutInfo");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Calories).HasColumnName("calories");
            entity.Property(e => e.Extras)
                .HasMaxLength(120)
                .HasColumnName("extras");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .HasColumnName("name");
            entity.Property(e => e.Photo)
                .HasMaxLength(80)
                .HasColumnName("photo");
            entity.Property(e => e.PhotoAttribution)
                .HasMaxLength(100)
                .HasColumnName("photo_attribution");
            entity.Property(e => e.Ref)
                .HasMaxLength(64)
                .HasColumnName("ref");
        });

        modelBuilder.Entity<Hall>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__hall__3213E83FE8A1BBCC");

            entity.ToTable("hall");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.FirstName)
                .HasMaxLength(30)
                .HasColumnName("firstName");
            entity.Property(e => e.Innovation)
                .HasMaxLength(80)
                .HasColumnName("innovation");
            entity.Property(e => e.LastName)
                .HasMaxLength(20)
                .HasColumnName("lastName");
            entity.Property(e => e.Year).HasColumnName("year");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
